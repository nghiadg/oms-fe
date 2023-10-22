import { Checkbox, Flex, Text } from "@radix-ui/themes"
import React, { FC } from "react"
import { IAppCheckboxProps } from "./AppCheckbox.type"

export const AppCheckbox: FC<IAppCheckboxProps> = ({ label, ...props }) => {
  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <Checkbox {...props} /> {label}
      </Flex>
    </Text>
  )
}
