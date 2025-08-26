import pinia from "@/store"
import type { IAddPlugin } from "types/plugin"

export const addPinia: IAddPlugin = (app) => {
  app.use(pinia)
}
