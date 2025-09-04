import { languageGlueIns } from "@/store"
import { ref } from "vue"

export function useLanguage() {
  const currentLocale = ref(languageGlueIns.currentLocale)
  const t = languageGlueIns.t.bind(languageGlueIns)
  function setLocale(locale: Parameters<typeof languageGlueIns.setLocale>[0]) {
    languageGlueIns.setLocale(locale)
    currentLocale.value = languageGlueIns.currentLocale
  }
  return {
    setLocale,
    currentLocale,
    t,
    get languages() {
      return languageGlueIns.languages
    },
  }
}
