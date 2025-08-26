import type { IAddPlugin } from "../../types/plugin"
import { add18n } from "./i18n"
import { addPinia } from "./pinia"
import { addTailwindCSS } from "./tailwindcss"

export const addPlugins: IAddPlugin = (app) => {
  addTailwindCSS(app)
  add18n(app)
  addPinia(app)
}
