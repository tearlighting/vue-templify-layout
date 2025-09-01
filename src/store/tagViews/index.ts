import { defineStore } from "pinia"
import { ref, computed } from "vue"
import router from "@/router"
import pinia from "../store"

export const useTagViewStore = defineStore("tagView", () => {
  /**
   * 存的是route的name
   */
  const tags = ref(new Set<string>())
  let currentTagName = ref<string | null>(null)
  const isCurrent = (name: string) => {
    return currentTagName.value === name
  }
  function addTag(name: string) {
    console.log("add")

    tags.value.add(name)
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
  }
  function setCurrent(payload: string) {
    currentTagName.value = payload
    addTag(payload)
  }

  const allTags = computed(() => Array.from(tags.value))

  return {
    addTag,
    deleteTag,
    allTags,
    isCurrent,
    setCurrent,
  }
})

export const useTagViewStoreHook = () => useTagViewStore(pinia)
