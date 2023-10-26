import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { Page } from "./router.const"

export const RequireAuth = () => {
  // TODO: Change condition after implement login page
  const auth = false
  if (!auth) {
    // TODO: Implement keep location
    return <Navigate to={Page.Login} replace />
  }

  return <Outlet />
}
