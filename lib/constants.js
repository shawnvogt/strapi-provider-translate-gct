'use strict'

module.exports = {
  GCT_API_MAX_TEXTS: 50,
  batchContentTypeUid: 'plugin::deepl.batch-translate-job',
  // GCT recomends limits for best performance v2 (basic): 5000, v3 (advanced): 30000
  GCT_API_MAX_REQUEST_SIZE: 5000,
  GCT_API_ROUGH_MAX_REQUEST_SIZE: 5000,
}
