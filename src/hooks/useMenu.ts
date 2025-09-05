import { EAppSize } from "@/constants"
import { menuManager, useAppStoreHook, useMenuStoreHook } from "@/store"
import { storeToRefs } from "pinia"

export const useMenu = () => {
  const { device } = storeToRefs(useAppStoreHook())
  const { isCollapse, isHidden } = storeToRefs(useMenuStoreHook())

  function toggleMenu() {
    if ([EAppSize.SMALL, EAppSize.BASE].includes(device.value)) menuManager.toggleHidden()
    else menuManager.toggleCollapse()
    isCollapse.value = menuManager.isCollapsed()
    isHidden.value = menuManager.isHidden()
  }

  return {
    toggleMenu,
  }
}
