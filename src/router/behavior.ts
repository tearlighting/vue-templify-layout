import { ELoginStatus } from "@/constants"
import { useRouteStoreHook } from "@/store/route"
import { useTagViewStore } from "@/store/tagViews"
import { useUserStoreHook } from "@/store/user"
import { bfs } from "@/utils"
import type { RouteLocationNormalizedGeneric, Router, RouteRecordRaw } from "vue-router"

export function setRouterBehavior(router: Router, redirect = "/") {
  const userStore = useUserStoreHook()
  const routeStore = useRouteStoreHook()
  const tagViewStore = useTagViewStore()
  router.beforeEach((to, from, next) => {
    //如果是登录页，直接放行
    if (to.name === "login") {
      next()
      return
    }
    const { roles } = to.meta
    //有权限直接放行，哪怕你是没登录的游客权限
    if (userStore.hasPemission(roles)) {
      //你跳哪，tag设在哪
      tagViewStore.setCurrent(to.name as string)
      //route不知道在哪，需要特殊处理
      const menuName = findMenuCurrent(to, routeStore.displayRoutes)
      if (menuName) {
        routeStore.setCurrent(menuName)
      } else {
        console.error("don't find menu ", to, routeStore.displayRoutes)
      }
      next()
    } else {
      //没有权限，判断是否登录
      //没有登录，跳转到登录页
      if (userStore.userInfo.loginStatus === ELoginStatus.unlogin) {
        next({
          name: "login",
        })
      }
      //如果是登录中，跳转到等待页,等待登录完成再跳转
      else if (userStore.userInfo.loginStatus === ELoginStatus.logining) {
        next({
          name: "waiting",
          params: {
            name: to.name as string,
            params: JSON.stringify(to.params),
          },
        })
      }
      //登录完也没有权限，跳转到首页
      else if (userStore.userInfo.loginStatus === ELoginStatus.logined) {
        next(redirect)
      }
    }
  })
}

function findMenuCurrent(to: RouteLocationNormalizedGeneric, displayRoutes: RouteRecordRaw[]): string | null {
  // 拿到路由的匹配链（父→子）
  const matched = to.matched
  // 倒序遍历，优先匹配子，找不到再回退到父
  for (let i = matched.length - 1; i >= 0; i--) {
    const name = matched[i].name as string
    if (existsInDisplayRoutes(displayRoutes, name)) {
      return name
    }
  }

  return null
}

// 判断某个 name 是否存在于 displayRoutes 树
function existsInDisplayRoutes(routes: RouteRecordRaw[], name: string): boolean {
  let res = false
  bfs(routes, (route) => {
    if (route.name === name) {
      res = true
      return {
        needBreak: true,
      }
    }
  })
  return res
}
