import { Text, TextArea } from "@radix-ui/themes"
import React from "react"
import { IAppTextAreaProps } from "./AppTextArea.type"
import { rootStyle } from "./AppTextArea.styles"
import { cx } from "@emotion/css"

export const AppTextArea = ({ err, className, ...props }: IAppTextAreaProps) => {
  return (
    <>
      <TextArea
        className={cx(rootStyle(!!err), className)}
        {...props}
        {...(!!err && { color: "red", variant: "soft" })}
      />
      {!!err ? (
        <Text size="1" color="red">
          {err}
        </Text>
      ) : null}
    </>
  )
}
