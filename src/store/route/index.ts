import { defineStore } from "pinia"
import { ref, watch } from "vue"
import pinia from ".."
import router from "@/router"
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
    displayRoutes.value = await transformRoute.run(router.getRoutes())
  }

  return {
    displayRoutes,
    setCurrent,
    isCurrent,
    generateDisplayRoutes,
  }
})

export const useRouteStoreHook = () => useRouteStore(pinia)
