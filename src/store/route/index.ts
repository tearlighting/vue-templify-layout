import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import pinia from "../store"
import { routes } from "@/router"
import { transformRoute } from "./tools"
import type { RouteMeta, RouteRecordRaw } from "vue-router"
import { getMeta } from "@/utils"

export const useRouteStore = defineStore("route", () => {
  const displayRoutes = ref<RouteRecordRaw[]>([])
  const currentRoute = reactive({
    name: null as string | null,
    meta: null as RouteMeta | null,
  })
  function isCurrent(name: string) {
    return name === currentRoute.name
  }
  function setCurrent(name: string) {
    currentRoute.name = name
    currentRoute.meta = getMeta(routes, currentRoute.name)!
  }
  async function generateDisplayRoutes() {
    displayRoutes.value = await transformRoute.run(routes)
  }

  return {
    displayRoutes,
    setCurrent,
    isCurrent,
    generateDisplayRoutes,
    currentRoute,
  }
})

export const useRouteStoreHook = () => useRouteStore(pinia)
