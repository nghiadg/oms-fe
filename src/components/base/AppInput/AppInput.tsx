import { Text, TextField } from "@radix-ui/themes"
import React, { forwardRef } from "react"
import { IAppInputProps } from "./AppInput.type"
import { rootCss } from "./AppInput.css"

export const AppInput = forwardRef<HTMLInputElement, IAppInputProps>(({ prefix, suffix, err, ...props }, ref) => {
  return (
    <>
      <TextField.Root className={rootCss(!!err)}>
        {!!prefix ? <TextField.Slot>{prefix}</TextField.Slot> : null}
        <TextField.Input ref={ref} {...props} {...(!!err && { color: "red", variant: "soft" })} />
        {!!suffix ? <TextField.Slot>{suffix}</TextField.Slot> : null}
      </TextField.Root>
      {!!err ? (
        <Text as="div" size="1" color="red" mt="1">
          {err}
        </Text>
      ) : null}
    </>
  )
})

AppInput.displayName = AppInput.name
