import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Page } from "./router.const"
import { RequireAuth } from "./RequireAuth"
import { Login } from "../pages/Login"
import { Theme } from "../pages/Theme"

export const RouterManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Page.Login} element={<Login />} />
        <Route path={Page.Theme} element={<Theme />} />
        <Route element={<RequireAuth />}>
          <Route path={Page.Home} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
