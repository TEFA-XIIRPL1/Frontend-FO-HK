import { boot } from 'quasar/wrappers'
import { authStore } from 'src/stores/auth'

// we globally register our component with Vue
export default boot(({ app }) => {
  app.config.globalProperties.$AuthStore = authStore()
})
