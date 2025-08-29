import { ELoginStatus, EPemission } from "@/constants"
import { defineStore } from "pinia"
import type { IUserInfo } from "user"
import { ref, unref } from "vue"
import pinia from "../store"

export const useUserStore = defineStore("userStore", () => {
  const userInfo = ref<IUserInfo>({
    loginStatus: ELoginStatus.unlogin,
    role: EPemission.visitor,
  })
  function setUserInfo(data: IUserInfo) {
    userInfo.value = data
  }

  function hasPemission(perm: EPemission[]) {
    return perm.includes(unref(userInfo).role)
  }

  return {
    userInfo,
    setUserInfo,
    hasPemission,
  }
})

export const useUserStoreHook = () => {
  return useUserStore(pinia)
}
