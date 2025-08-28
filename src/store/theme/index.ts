import { createThemeManager } from "@/theme"
import { defineStore } from "pinia"
import { darkPalette, lightPalette } from "@/constants"
import { applyToDom, generateTheme } from "@/utils/theme"
import { ref } from "vue"
import pinia from ".."
export const useThemeStore = defineStore("theme", () => {
  const themes = {
    light: generateTheme(lightPalette),
    dark: generateTheme(darkPalette),
  }

  const themeManager = createThemeManager(themes, "light")

  const current = ref(themeManager.current)
  const setTheme = (name: typeof current.value) => {
    current.value = name
    themeManager.setTheme(name)
    applyToDom(themeManager.getTheme())
  }

  return {
    current,
    setTheme,
  }
})

export const useThemeStoreHook = () => {
  return useThemeStore(pinia)
}
