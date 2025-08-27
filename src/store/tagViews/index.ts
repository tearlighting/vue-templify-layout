import { defineStore } from "pinia"
import { ref, computed } from "vue"
import router from "@/router"

export const useTagViewStore = defineStore("tagView", () => {
  /**
   * 存的是route的name
   */
  const tags = ref(new Set<string>())
  let currentTagName: string | null = null
  const isCurrent = (name: string) => {
    return currentTagName === name
  }
  function addTag(name: string) {
    tags.value.add(name)
  }

  function deleteTag(name: string) {
    const idx = allTags.value.findIndex((tag) => tag === name)
    if (idx === -1) return

    allTags.value.splice(idx, 1)
    // 如果删的是当前路由
    if (isCurrent(name)) {
      let nextRoute: string | null = null
      // 先尝试右边
      if (allTags.value[idx]) {
        nextRoute = allTags.value[idx]
      }
      // 否则尝试左边
      else if (allTags.value[idx - 1]) {
        nextRoute = allTags.value[idx - 1]
      }
      // 否则跳 fallback
      else {
        nextRoute = "/" // 固定首页
      }
      if (nextRoute) {
        router.push({ path: nextRoute })
      }
    }
  }
  function setCurrent(payload: string) {
    currentTagName = payload
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
