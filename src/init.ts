import { watch } from "vue"
import { useRouteStoreHook, useTagViewStoreHook, themeManager, useUserStoreHook, useAppStoreHook } from "./store"
import { setupRouteGuard } from "./router/behavior"

export interface IAllStoreProps {
  userStore: ReturnType<typeof useUserStoreHook>
  routeStore: ReturnType<typeof useRouteStoreHook>
  tagViewStore: ReturnType<typeof useTagViewStoreHook>
  themeStore: typeof themeManager
  appStore: ReturnType<typeof useAppStoreHook>
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

function changeMenuType<T extends IAllStoreProps>({ appStore }: T) {
  watch(
    () => appStore.device,
    () => {
      console.log(appStore.device)
    },
    {
      immediate: true,
    }
  )
}

function initApp() {
  const stores = {
    userStore: useUserStoreHook(),
    routeStore: useRouteStoreHook(),
    tagViewStore: useTagViewStoreHook(),
    themeStore: themeManager,
    appStore: useAppStoreHook(),
  }
  setDisplayRoutes(stores)
  setupTheme(stores)
  setupRouteGuard(stores)
  changeMenuType(stores)
}
initApp()
