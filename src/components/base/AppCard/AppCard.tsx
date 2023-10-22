import { Card } from "@radix-ui/themes"
import React from "react"
import { IAppCardProps } from "./AppCard.type"
import { styles } from "./AppCard.styles"
import { cx } from "@emotion/css"

export const AppCard = ({ isShadow, className, children, ...props }: IAppCardProps) => {
  return (
    <Card className={cx(styles(isShadow), className)} {...props}>
      {children}
    </Card>
  )
}
