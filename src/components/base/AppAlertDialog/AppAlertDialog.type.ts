import { ReactNode, MouseEvent } from "react"
import { IAppButtonProps } from "../AppButton"

export interface IAppAlertDialogButton extends IAppButtonProps {}

export type AppAlertDialogType = "error" | "warning" | "success" | "info"

export interface IAppAlertDialogProps {
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
  onClose?: (key: string) => void
  id?: string
}
