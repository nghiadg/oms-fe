import { ReactNode, MouseEvent } from "react"
import { IAppButtonProps } from "../AppButton"
import { AlertDialogRootProps } from "@radix-ui/themes/dist/cjs/components/alert-dialog"

export interface IAppAlertDialogButton extends IAppButtonProps {
  btnCd: AppAlertDialogButtonCode | string
}

export type AppAlertDialogType = "error" | "warning" | "success" | "info"

export type AppAlertDialogButtonCode = "close" | "ok"

export interface IAppAlertDialogProps extends AlertDialogRootProps {
  title: string
  description: string
  content?: ReactNode
  buttons?: IAppAlertDialogButton[]
  onCancel?: (e: MouseEvent<HTMLButtonElement>) => void
  onConfirm?: (e: MouseEvent<HTMLButtonElement>) => void
  cancelLabel?: string
  confirmLabel?: string
  icon?: ReactNode
  type?: AppAlertDialogType
  // Only use for dialog queue
  onClose?: (btnCd: AppAlertDialogButtonCode | string) => void
  id?: string
}
