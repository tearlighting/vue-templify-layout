import { defineStore } from "pinia"
import { ref } from "vue"
import pinia from ".."
import { routes } from "@/router"
import { transformRoute } from "./tools"
import type { RouteRecordRaw } from "vue-router"

export const useRouteStore = defineStore("route", () => {
  const displayRoutes = ref<RouteRecordRaw[]>([])
  let currentRouteName = ref<string | null>(null)
  function isCurrent(name: string) {
    return name === currentRouteName.value
  }
  function setCurrent(name: string) {
    currentRouteName.value = name
  }
  async function generateDisplayRoutes() {
    displayRoutes.value = await transformRoute.run(routes)
  }

  return {
    displayRoutes,
    setCurrent,
    isCurrent,
    generateDisplayRoutes,
    currentRouteName,
  }
})

export const useRouteStoreHook = () => useRouteStore(pinia)
