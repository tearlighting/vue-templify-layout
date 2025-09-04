import { darkPalette, lightPalette } from "@/constants"
import { createThemeManager } from "@/utils"

export const themeManager = createThemeManager().register("light", lightPalette).register("dark", darkPalette)
