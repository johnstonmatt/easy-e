const defaultErricMessageForHumans = (() => 'easy-e says: "no message for humans"!')()
const defaultErricCode = (() => 'erric/error-construction/default-error-code-not-overridden')()
const defaultErricMetadata = (() => ({
  _defaultMetaDataFromErric: true,
  _tip: 'metadata can be any type'
}))()

export { defaultErricMessageForHumans, defaultErricCode, defaultErricMetadata }
