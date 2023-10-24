import { Card } from "@radix-ui/themes"
import React from "react"
import { IAppCardProps } from "./AppCard.type"
import { cardCss } from "./AppCard.css"
import { cx } from "@emotion/css"

export const AppCard = ({ shadow, className, children, ...props }: IAppCardProps) => {
  return (
    <Card className={cx(cardCss(shadow), className)} {...props}>
      {children}
    </Card>
  )
}
