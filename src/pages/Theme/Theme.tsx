import { Flex } from "@radix-ui/themes"
import React from "react"
import { AppButton } from "../../components/base/AppButton"
import { AppInput } from "../../components/base/AppInput"
import { AppCheckbox } from "../../components/base/AppCheckbox"
import { AppRadioGroup } from "../../components/base/AppRadioGroup"
import { AppTextArea } from "../../components/base/AppTextArea"
import { AppCard } from "../../components/base/AppCard"
import { SunIcon } from "@radix-ui/react-icons"
import { AppGrid } from "../../components/base/AppGrid"
import { SideNavigationBar } from "../../components/common/SideNavigationBar"
import { dialogApi } from "../../components/base/AppAlertDialog"

export const Theme = () => {
  const openAlert = async () => {
    const res = await dialogApi.open({
      title: "Confirm delete?",
      description: "Welcome to world",
      type: "error",
      buttons: [
        {
          btnCd: "btncd",
          onClick: () => {},
        },
      ],
    })

    console.log({ res })

    // Do something continue => dialog hell
  }

  return (
    <Flex direction="column" gap="2">
      <SideNavigationBar />
      <AppButton icon={<SunIcon />} label="日本語" tooltip="日本語" onClick={openAlert} />
      <AppInput prefix="&" />
      <AppInput err="Error message hint" prefix="%" />
      <AppCheckbox label="はい" />
      <AppRadioGroup>
        <AppRadioGroup.Item label="はい" value="1" />
        <AppRadioGroup.Item label="いいえ" value="2" />
      </AppRadioGroup>
      <AppTextArea />
      <AppTextArea err="Error message" />
      <AppCard>AppCard</AppCard>
      <AppCard shadow>App Card isShadow</AppCard>
      <div style={{ height: 300 }}>
        <AppGrid />
      </div>
    </Flex>
  )
}
