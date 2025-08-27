import { defineStore } from "pinia"
import { reactive } from "vue"
import { createMenuController } from "./tools"
import pinia from ".."

export const useMenuStore = defineStore("menu", () => {
  const menuController = reactive(createMenuController())
  return {
    menuController,
  }
})

export const useMenuStoreHook = () => useMenuStore(pinia)
