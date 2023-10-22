// CSS
import "./global.css"
import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
// Ag Grid
import "ag-grid-community/styles/ag-grid.css" // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css" // Optional theme CSS

import React from "react"
import ReactDOM from "react-dom/client"
import { Main } from "./Main"
import reportWebVitals from "./reportWebVitals"
import { AppAlertDialogQueue } from "./components/base/AppAlertDialog"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Theme radius="small" accentColor="teal">
      <AppAlertDialogQueue>
        <Main />
      </AppAlertDialogQueue>
    </Theme>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
