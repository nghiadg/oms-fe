import React from "react"
import { rootCss } from "./AppProcessing.css"
import { IconLoading } from "../../../icons/IconLoading"

export const AppProcessing = () => {
  return (
    <div className={rootCss}>
      <IconLoading size={48} />
    </div>
  )
}
