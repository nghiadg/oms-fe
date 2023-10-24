import { css } from "@emotion/css"
import { AppAlertDialogType } from "./AppAlertDialog.type"

export const contentCss = css({
  maxWidth: 350,
  padding: 0,
  position: "relative",
  overflow: "visible",
})

export const bgColorCss = (type: AppAlertDialogType) => {
  switch (type) {
    case "warning":
      return { backgroundColor: "var(--yellow-9)" }
    case "error":
      return { backgroundColor: "var(--red-9)" }
    case "success":
      return { backgroundColor: "var(--lime-9)" }
    case "info":
      return { backgroundColor: "var(--teal-9)" }
  }
}

export const iconCss = (type: AppAlertDialogType) =>
  css({
    width: 44,
    height: 44,
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -22,
    left: "50%",
    transform: "translateX(-50%)",
    ...bgColorCss(type),
  })

export const signalCss = (type: AppAlertDialogType) =>
  css({
    height: 4,
    borderTopLeftRadius: "var(--radius-4)",
    borderTopRightRadius: "var(--radius-4)",
    ...bgColorCss(type),
  })
