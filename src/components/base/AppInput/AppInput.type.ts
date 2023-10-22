import { ReactNode } from "react"
import { TextFieldInputProps } from "@radix-ui/themes/dist/cjs/components/text-field"

export interface IAppInputProps extends Omit<TextFieldInputProps, "prefix"> {
  prefix?: ReactNode
  suffix?: ReactNode
  err?: string
}
