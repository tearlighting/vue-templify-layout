import { useUserStoreHook } from "./user"
import { useRouteStore } from "./route"
import { useThemeStore } from "./theme"
import { watch } from "vue"

function initStore() {
  //根据role生成路由
  const userStore = useUserStoreHook()
  const routeStore = useRouteStore()

  watch(
    () => userStore.userInfo.role,
    () => {
      routeStore.generateDisplayRoutes()
    },
    { immediate: true }
  )
  //注入主题
  const themeStore = useThemeStore()
  themeStore.setTheme(themeStore.current)
}
initStore()
