import { Flex, Link, Text } from "@radix-ui/themes"
import React from "react"
import { AppCard } from "../../components/base/AppCard"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { AppInput } from "../../components/base/AppInput"
import { AppButton } from "../../components/base/AppButton"
import { boxCss, containerCss } from "./ResetPassword.css"

export const ResetPassword = () => {
  return (
    <Flex className={containerCss} align="center" justify="center">
      <AppCard size="2" className={boxCss} shadow>
        <Text as="div" align="center" mt="5">
          <GitHubLogoIcon width={64} height={64} />
        </Text>
        <Text size="1" mt="4" as="div">
          Nhập địa chỉ email đăng ký tài khoản của bạn và chúng tôi sẽ gửi cho bạn đường dẫn để khôi phục mật khẩu.
        </Text>
        <Flex direction="column" gap="3" mt="4">
          <div>
            <Text as="div" size="2" mb="1">
              Email
            </Text>
            <AppInput placeholder="Địa chỉ email" />
          </div>

          <AppButton label="Xác nhận" />
          <Text size="1" mt="6" align="center">
            Chưa có tài khoản?&nbsp;
            <Link size="1">Đăng ký</Link>
          </Text>
        </Flex>
      </AppCard>
    </Flex>
  )
}
