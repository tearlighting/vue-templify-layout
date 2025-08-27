import { defineStore } from "pinia"
import { ref } from "vue"
import pinia from ".."
import { routes } from "@/router"
import { transformRoute } from "./tools"
import type { RouteRecordRaw } from "vue-router"

export const useRouteStore = defineStore("route", () => {
  const displayRoutes = ref<RouteRecordRaw[]>([])
  let currentRouteName: string | null = null
  function isCurrent(name: string) {
    return name === currentRouteName
  }
  function setCurrent(name: string) {
    currentRouteName = name
  }
  async function generateDisplayRoutes() {
    displayRoutes.value = await transformRoute.run(routes)
  }
  function getcurrentRoute() {
    return currentRouteName
  }
  return {
    displayRoutes,
    setCurrent,
    isCurrent,
    generateDisplayRoutes,
    getcurrentRoute,
    // currentRouteName,
  }
})

export const useRouteStoreHook = () => useRouteStore(pinia)
