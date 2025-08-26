import { createApp, watch } from "vue"
import "./style.css"
import App from "./App.vue"
import { addPlugins } from "./plugins"
import { useUserStoreHook } from "./store/user"
import { useRouteStore } from "./store/route"
const app = createApp(App)
addPlugins(app)
app.mount("#app")

const userStore = useUserStoreHook()
const routeStore = useRouteStore()

watch(
  () => userStore.userInfo.role,
  () => {
    routeStore.generateDisplayRoutes()
  },
  { immediate: true }
)
