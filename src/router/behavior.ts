import { turn2PageGuard, isLoginGuard, createAuthGuard, createFlowMiddleware } from "@/utils"
import type { NavigationGuardWithThis } from "vue-router"
import router from "."
import { createChangeRecactiveDataMiddleware } from "./changeReactiveData"

import type { IAllStoreProps } from "@/init"

/**
 * 设置路由守卫
 * @param param0
 */
export function setupRouteGuard<T extends IAllStoreProps>(stores: T) {
  const changeRecactiveDataMiddleware = createChangeRecactiveDataMiddleware(stores)
  const routerBeforeEachMiddleware = createFlowMiddleware<Parameters<NavigationGuardWithThis<any>>>()
    .use(isLoginGuard)
    .use(createAuthGuard(stores.userStore, { path: "/" }))
    .use(changeRecactiveDataMiddleware.run.bind(changeRecactiveDataMiddleware))
    .use(turn2PageGuard)

  router.beforeEach(async (...args) => await routerBeforeEachMiddleware.run(args))
}
