import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Page } from "./router.const"
import { RequireAuth } from "./RequireAuth"
import { Login } from "../pages/Login"
import { Theme } from "../pages/Theme"
import { ResetPassword } from "../pages/ResetPassword"
import { RegisterAccount } from "../pages/RegisterAccount"

export const RouterManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Page.Login} element={<Login />} />
        <Route path={Page.ResetPassword} element={<ResetPassword />} />
        <Route path={Page.RegisterAccount} element={<RegisterAccount />} />
        <Route path={Page.Theme} element={<Theme />} />
        <Route element={<RequireAuth />}>
          <Route path={Page.Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
