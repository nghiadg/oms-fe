import { IconProps } from "@radix-ui/react-icons/dist/types"
import { FC } from "react"

export interface IMenuNavigationItem {
  itemCd: number
  icon: FC<IconProps>
  title: string
  onClick: () => void
}
