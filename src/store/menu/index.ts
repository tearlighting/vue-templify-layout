import { createMenuManager } from "@/utils"
import { defineStore } from "pinia"
import { ref } from "vue"
import pinia from "../store"

export const menuManager = createMenuManager()

export const useMenuStore = defineStore("menu", () => {
  const isCollapse = ref(menuManager.isCollapsed())
  const isHidden = ref(menuManager.isHidden())

  return {
    isCollapse,
    isHidden,
  }
})

export const useMenuStoreHook = () => useMenuStore(pinia)
