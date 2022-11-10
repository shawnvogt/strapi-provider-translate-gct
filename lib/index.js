'use strict'

const {Translate} = require('@google-cloud/translate').v2;

const Bottleneck = require('bottleneck/es5')

const {
  GCT_API_MAX_TEXTS,
  GCT_API_ROUGH_MAX_REQUEST_SIZE,
} = require('./constants')
const { parseLocale } = require('./parse-locale')
const { getService } = require('./get-service')

/**
 * Module dependencies
 */

module.exports = {
  provider: 'gct',
  name: 'GCT',

  init(providerOptions = {}) {
    const apiKey = process.env.GCT_API_KEY || providerOptions.apiKey

    const apiProjectId = process.env.GCT_PROJECT_ID || providerOptions.projectId
    const apiUrl = process.env.GCT_API_URL || providerOptions.apiUrl

    const translate = new Translate({
      key: apiKey,
      autoRetry: false,
      maxRetries: 0,
      projectId: apiProjectId,
      apiEndpoint: apiUrl
  });

    const limiter = new Bottleneck({
      minTime: process.env.NODE_ENV == "test" ? 10 : 200,
      maxConcurrent: 5,
    });

    const rateLimitedTranslate = limiter.wrap(
      translate.translate.bind(translate)
    );

    return {
      async translate({ text, sourceLocale, targetLocale, priority }) {
        if (!text) {
          return [];
        }
        if (!sourceLocale | !targetLocale) {
          throw new Error("source and target locale must be defined");
        }

        const textArray = Array.isArray(text) ? text : [text];

        const chunksService = getService("chunks");

        const { chunks, reduceFunction } = chunksService.split(textArray, {
          maxLength: GCT_API_MAX_TEXTS,
          maxByteSize: GCT_API_ROUGH_MAX_REQUEST_SIZE,
        });

        return reduceFunction(
          await Promise.all(
            chunks.map(async (texts) => {
              let [translations] = await rateLimitedTranslate.withOptions(
                {
                  priority:
                    typeof priority == "number"
                      ? priority
                      : GCT_PRIORITY_DEFAULT,
                },
                texts,
                {
                  to: parseLocale(targetLocale),
                  from: parseLocale(sourceLocale),
                }
                // TODO: other options
              );
              translations = Array.isArray(translations)
                ? translations
                : [translations];
              // return result.map((value) => value.text)
              return translations;
            })
          )
        );
      },
      async usage() {
        // TODO: change to get actual gct usage
        return {
          count: 1000,
          limit: 10000,
        };
      },
    };
  },
}
