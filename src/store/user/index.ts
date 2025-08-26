import { ELoginStatus } from "@/constants"
import { defineStore } from "pinia"
import type { IUserInfo } from "user"
import { reactive } from "vue"
import pinia from ".."

export const useUserStore = defineStore("userStore", () => {
  const userInfo = reactive<IUserInfo>({
    loginStatus: ELoginStatus.unlogin,
  })

  return {
    userInfo,
  }
})

export const useUserStoreHook = () => {
  return useUserStore(pinia)
}
