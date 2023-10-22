import { Text, TextField } from "@radix-ui/themes"
import React, { FC } from "react"
import { IAppInputProps } from "./AppInput.type"
import { rootStyle } from "./AppInput.styles"

export const AppInput: FC<IAppInputProps> = ({ prefix, suffix, err, ...props }) => {
  return (
    <>
      <TextField.Root className={rootStyle(!!err)}>
        {!!prefix ? <TextField.Slot>{prefix}</TextField.Slot> : null}
        <TextField.Input {...props} {...(!!err && { color: "red", variant: "soft" })} />
        {!!suffix ? <TextField.Slot>{suffix}</TextField.Slot> : null}
      </TextField.Root>
      {!!err ? (
        <Text as="div" size="1" color="red" mt="1">
          {err}
        </Text>
      ) : null}
    </>
  )
}
