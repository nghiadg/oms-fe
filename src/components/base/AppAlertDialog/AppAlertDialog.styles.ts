import { css } from "@emotion/css"
import { AppAlertDialogType } from "./AppAlertDialog.type"

export const contentStyle = css`
  max-width: 350px;
  padding: 0;
  position: relative;
  overflow: visible;
`
export const bgColor = (type: AppAlertDialogType) => css`
  ${type === "warning" && { backgroundColor: "var(--yellow-9)" }};
  ${type === "error" && { backgroundColor: "var(--red-9)" }};
  ${type === "success" && { backgroundColor: "var(--lime-9)" }};
  ${type === "info" && { backgroundColor: "var(--teal-9)" }};
`

export const iconStyle = (type: AppAlertDialogType) => css`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background-color: var(--red-9);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  ${bgColor(type)}
`
export const signalStyle = (type: AppAlertDialogType) => css`
  height: 4px;
  border-top-left-radius: var(--radius-4);
  border-top-right-radius: var(--radius-4);
  ${bgColor(type)}
`
