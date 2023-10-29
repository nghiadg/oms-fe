import { atom } from "jotai"
import { IAuthStore } from "./auth.type"
import { appStore } from "../store"

const initialStore: IAuthStore = {
  isLogin: false,
}

export const authStore = atom(initialStore)

export const AuthStoreService = {
  login: () => {
    appStore.set(authStore, { isLogin: true })
  },
  logout: () => {
    appStore.set(authStore, { isLogin: false })
  },
}
