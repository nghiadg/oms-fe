import React from "react"
import { AppCard } from "../../components/base/AppCard"
import { AppInput } from "../../components/base/AppInput"
import { Flex, Link, Text } from "@radix-ui/themes"
import { AppButton } from "../../components/base/AppButton"
import { boxCss, containerCss } from "./Login.css"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export const Login = () => {
  return (
    <Flex className={containerCss} align="center" justify="center">
      <AppCard size="2" className={boxCss}>
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
            <AppInput err="Mật khẩu phải có 6-8 ký tự" placeholder="Mật khẩu" type="password" />
            <Link size="1">Quên mật khẩu?</Link>
          </div>
          <AppButton label="Đăng Ký" variant="outline" />
          <AppButton label="Đăng Nhập" />
        </Flex>
      </AppCard>
    </Flex>
  )
}
