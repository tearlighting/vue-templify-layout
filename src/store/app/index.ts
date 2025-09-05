import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import { getDevice, Settings } from "./tools"
import pinia from "../store"

export const useAppStore = defineStore("app", () => {
  const device = ref(getDevice())
  const settings = reactive(new Settings())
  function updateDevice() {
    device.value = getDevice()
  }

  window.addEventListener("resize", updateDevice)

  return {
    device,
    updateDevice,
    settings,
  }
})

export const useAppStoreHook = () => useAppStore(pinia)
