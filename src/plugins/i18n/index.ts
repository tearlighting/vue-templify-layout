import type { IAddPlugin } from "plugin"
import { createI18n } from "vue-i18n"

const zh = {
  test: "测试",
}
const en = {
  test: "test",
}
const jp = {
  test: "テスト",
}

export const add18n: IAddPlugin = (app) => {
  const i18n = createI18n({
    locale: "zh",
    legacy: false,
    messages: {
      zh,
      en,
      jp,
    },
  })
  app.use(i18n)
}
