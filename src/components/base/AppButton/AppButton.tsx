import React, { FC } from "react"
import { Button, Tooltip } from "@radix-ui/themes"
import { btnCss } from "./AppButton.css"
import { IAppButtonProps } from "./AppButton.type"
import { cx } from "@emotion/css"

export const AppButton: FC<IAppButtonProps> = ({
  label,
  icon,
  iconPlacement = "start",
  tooltip = "",
  className,
  children,
  ...props
}) => {
  const renderButton = () => {
    return (
      <Button className={cx(btnCss, className)} {...props}>
        {iconPlacement === "start" && icon}
        {label}
        {children}
        {iconPlacement === "end" && icon}
      </Button>
    )
  }

  return <>{!!tooltip ? <Tooltip content={tooltip}>{renderButton()}</Tooltip> : renderButton()}</>
}
