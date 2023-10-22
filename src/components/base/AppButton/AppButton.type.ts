import { ReactNode } from "react"
import { ButtonProps } from "@radix-ui/themes/dist/cjs/components/button"

type IconPlacement = "start" | "end"

export interface IAppButtonProps extends ButtonProps {
  label?: string
  tooltip?: string
  icon?: ReactNode
  iconPlacement?: IconPlacement
}
