import { boot } from 'quasar/wrappers'
import { Api } from 'src/services/api'
import { Config } from 'src/services/config'
import { Helper } from 'src/services/helper'

export default boot(({ app }) => {
  app.config.globalProperties.$Api = /** @type {Api} */ (Api)
  app.config.globalProperties.$Config = /** @type {Config} */ (Config)
  app.config.globalProperties.$Helper = /** @type {Helper} */ (Helper)
})
