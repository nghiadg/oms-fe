import { Flex, Link, Text } from "@radix-ui/themes"
import React from "react"
import { AppCard } from "../../components/base/AppCard"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { AppInput } from "../../components/base/AppInput"
import { AppButton } from "../../components/base/AppButton"
import { boxCss, containerCss } from "./RegisterAccount.css"

export const RegisterAccount = () => {
  return (
    <Flex className={containerCss} align="center" justify="center">
      <AppCard size="2" className={boxCss} shadow>
        <Text as="div" align="center" mt="5">
          <GitHubLogoIcon width={64} height={64} />
        </Text>
        <Flex direction="column" gap="3" mt="4">
          <div>
            <Text as="div" size="2" mb="1">
              Email
            </Text>
            <AppInput placeholder="Địa chỉ email" />
          </div>
          <div>
            <Text as="div" size="2" mb="1">
              Mật khẩu
            </Text>
            <AppInput placeholder="Mật khẩu" />
          </div>
          <div>
            <Text as="div" size="2" mb="1">
              Nhập lại mật khẩu
            </Text>
            <AppInput placeholder="Mật khẩu" />
          </div>

          <AppButton label="Đăng ký" />
          <Text size="1" mt="6" align="center">
            Đã có tài khoản?&nbsp;
            <Link size="1">Đăng nhập</Link>
          </Text>
        </Flex>
      </AppCard>
    </Flex>
  )
}
