import { defineStore } from "pinia"
import { ref, computed } from "vue"
import router, { routes } from "@/router"
import pinia from "../store"
import { getMeta } from "@/utils"

export const useTagViewStore = defineStore("tagView", () => {
  /**
   * 存的是route的name
   */
  const tags = ref(new Set<string>())
  const currentTagName = ref<string | null>(null)

  const cachedTags = ref(new Set<string>())
  const isCurrent = (name: string) => {
    return currentTagName.value === name
  }
  function addTag(name: string) {
    tags.value.add(name)
    const { keepAlive } = getMeta(routes, name)
    keepAlive && cachedTags.value.add(name)
  }

  function deleteTag(name: string) {
    const arr = allTags.value
    const idx = arr.findIndex((tag) => tag === name)
    if (idx === -1) return

    if (isCurrent(name)) {
      let nextRoute: string | null = null
      if (arr[idx + 1]) {
        nextRoute = arr[idx + 1]
      } else if (arr[idx - 1]) {
        nextRoute = arr[idx - 1]
      } else {
        nextRoute = "Home"
      }
      router.push({ name: nextRoute, force: true })
    }

    tags.value.delete(name)
    cachedTags.value.has(name) && cachedTags.value.delete(name)
  }
  function setCurrent(payload: string) {
    currentTagName.value = payload
    addTag(payload)
  }

  const allTags = computed(() => Array.from(tags.value))

  const allCachedTags = computed(() => Array.from(cachedTags.value))

  return {
    addTag,
    deleteTag,
    allTags,
    isCurrent,
    setCurrent,
    allCachedTags,
  }
})

export const useTagViewStoreHook = () => useTagViewStore(pinia)
