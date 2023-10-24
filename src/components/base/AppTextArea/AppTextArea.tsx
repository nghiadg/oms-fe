import { Text, TextArea } from "@radix-ui/themes"
import React from "react"
import { IAppTextAreaProps } from "./AppTextArea.type"
import { textAreaCss } from "./AppTextArea.css"
import { cx } from "@emotion/css"

export const AppTextArea = ({ err, className, ...props }: IAppTextAreaProps) => {
  return (
    <>
      <TextArea
        className={cx(textAreaCss(!!err), className)}
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
