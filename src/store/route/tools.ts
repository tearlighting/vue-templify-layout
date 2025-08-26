import type { RouteRecordRaw, RouteMeta } from "vue-router"
import { createTransformMiddleWare } from "@/utils"
import { EPemission } from "@/constants"
import { useUserStoreHook } from "../user"

function filterHiddenRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  const res = []
  for (let route of routes) {
    if (!route.meta?.hidden) {
      const currentRoute = { ...route }
      if (route.children?.length) {
        currentRoute.children = filterHiddenRoutes(route.children)
      }
      res.push(currentRoute)
    }
  }
  return res
}

function filterAccessRoutes(routes: RouteRecordRaw[], pemission: EPemission): RouteRecordRaw[] {
  const res = []
  for (let route of routes) {
    if (route.meta?.roles?.includes(pemission)) {
      const currentRoute = { ...route }
      if (route.children?.length) {
        currentRoute.children = filterAccessRoutes(route.children, pemission)
      }
      res.push(currentRoute)
    }
  }
  return res
}

function filterAccessRoutesWithUserInfo(routes: RouteRecordRaw[]) {
  const { userInfo } = useUserStoreHook()
  const pemission = userInfo?.role ?? EPemission.visitor
  return filterAccessRoutes(routes, pemission)
}

export const transformRoute = createTransformMiddleWare<RouteRecordRaw[]>().use(filterHiddenRoutes).use(filterAccessRoutesWithUserInfo)
