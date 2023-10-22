import { Flex, RadioGroup, Text } from "@radix-ui/themes"
import React from "react"
import { IAppRadioItemProps } from "./AppRadioGroup.type"

export const AppRadioItem = ({ label, ...props }: IAppRadioItemProps) => {
  return (
    <Text as="label" size="2">
      <Flex gap="2">
        <RadioGroup.Item {...props} /> {label}
      </Flex>
    </Text>
  )
}
