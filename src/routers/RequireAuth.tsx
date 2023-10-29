import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Page } from "./router.const"
import { authStore } from "../stores/auth"
import { useAtom } from "jotai"

export const RequireAuth = () => {
  const [store] = useAtom(authStore)

  if (!store.isLogin) {
    return <Navigate to={Page.Login} replace />
  }

  return <Outlet />
}
