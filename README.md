# Google Cloud Translate provider for Strapi Translate Plugin

Configure the provider through the pluginOptions:

```js
module.exports = {
  // ...
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: 'gct',
      // Pass credentials and other options to the provider
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: 'key',
        // use custom api url - optional
        apiUrl: 'translation.googleapis.com',
      },
      // other options ...
    },
  },
  // ...
}
```

or use the default environment variables:

- `GCT_API_KEY` - default `undefined`
- `GCT_API_URL` - default `undefined`

To get an API key, follow the quickstart guide at [googleapis.dev](https://googleapis.dev/nodejs/translate/latest/index.html#quickstart).

## Limitations:

- Only the [google cloud translate supported languages](https://cloud.google.com/translate/docs/languages) can be translated
- The API-Limits of Google Cloud Translate vary depending on your project setup ([the docs](https://cloud.google.com/translate/quotas#set_usage_quotas)
