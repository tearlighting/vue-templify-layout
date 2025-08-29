import type { RouteRecordRaw } from "vue-router"
import { createTransformMiddleWare } from "@/utils"
import { EPemission } from "@/constants"
import { useUserStoreHook } from "../user"
import { storeToRefs } from "pinia"

function filterHiddenRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  const res = []
  for (let route of routes) {
    if (!route.meta?.hidden) {
      const currentRoute = { ...route }
      if (route.children?.length) {
        currentRoute.children = filterHiddenRoutes(route.children)
      }
      res.push(currentRoute)
    } else {
      if (route.children?.length) {
        res.push(...filterHiddenRoutes(route.children))
      }
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
  const { userInfo } = storeToRefs(useUserStoreHook())
  const pemission = userInfo.value.role
  return filterAccessRoutes(routes, pemission)
}

export const transformRoute = createTransformMiddleWare<RouteRecordRaw[]>().use(filterHiddenRoutes).use(filterAccessRoutesWithUserInfo)
