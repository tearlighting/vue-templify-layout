import { EDeviceType } from "@/constants"
import { menuManager, useAppStoreHook, useMenuStoreHook } from "@/store"
import { storeToRefs } from "pinia"

export const useMenu = () => {
  const { deviceType } = storeToRefs(useAppStoreHook())
  const { isCollapse, isHidden } = storeToRefs(useMenuStoreHook())

  function toggleMenu() {
    if (deviceType.value === EDeviceType.MOBILE) menuManager.toggleHidden()
    else menuManager.toggleCollapse()
    isCollapse.value = menuManager.isCollapsed()
    isHidden.value = menuManager.isHidden()
  }

  return {
    toggleMenu,
  }
}
