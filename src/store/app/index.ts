import { defineStore } from "pinia"
import { reactive, ref } from "vue"
import { getDevice, Settings } from "./tools"

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
