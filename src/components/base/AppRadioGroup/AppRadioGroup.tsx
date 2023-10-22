import { Flex, RadioGroup } from "@radix-ui/themes"
import React from "react"
import { AppRadioItem } from "./AppRadioItem"
import { RadioGroupRootProps } from "@radix-ui/themes/dist/cjs/components/radio-group"

export const AppRadioGroup = ({ children, ...props }: RadioGroupRootProps) => {
  return (
    <RadioGroup.Root {...props}>
      <Flex gap="2" direction="column">
        {children}
      </Flex>
    </RadioGroup.Root>
  )
}

AppRadioGroup.Item = AppRadioItem
