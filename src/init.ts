import { watch } from "vue"
import { useRouteStoreHook, useTagViewStoreHook, themeManager, useUserStoreHook } from "./store"
import { setupRouteGuard } from "./router/behavior"

export interface IAllStoreProps {
  userStore: ReturnType<typeof useUserStoreHook>
  routeStore: ReturnType<typeof useRouteStoreHook>
  tagViewStore: ReturnType<typeof useTagViewStoreHook>
  themeStore: typeof themeManager
}
/**
 * 注入主题
 * @param param0
 */
function setupTheme<T extends IAllStoreProps>({ themeStore }: T) {
  themeStore.setTheme(themeStore.current)
}
/**
 * 监听用户角色变化，设置显示的路由
 * @param param0
 */
function setDisplayRoutes<T extends IAllStoreProps>({ userStore, routeStore }: T) {
  watch(
    () => userStore.userInfo.role,
    () => {
      routeStore.generateDisplayRoutes()
    },
    { immediate: true }
  )
}

function initApp() {
  const stores = {
    userStore: useUserStoreHook(),
    routeStore: useRouteStoreHook(),
    tagViewStore: useTagViewStoreHook(),
    themeStore: themeManager,
  }
  setDisplayRoutes(stores)
  setupTheme(stores)
  setupRouteGuard(stores)
}
initApp()
