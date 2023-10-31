import React, { useState } from "react"
import { AppCard } from "../../components/base/AppCard"
import { AppInput } from "../../components/base/AppInput"
import { Flex, Link, Text } from "@radix-ui/themes"
import { AppButton } from "../../components/base/AppButton"
import { boxCss, containerCss } from "./Login.css"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { ILoginForm } from "./Login.type"
import { AuthService } from "../../services/auth"
import { noticeMsgError } from "../../utils/error"
import { AppProcessing } from "../../components/base/AppProcessing"
import { AuthStoreService } from "../../stores/auth"
import { useNavigate } from "react-router-dom"
import { Page } from "../../routers"

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()

  const onSubmit = async (data: ILoginForm) => {
    try {
      setIsLoading(true)
      await AuthService.login(data)
      AuthStoreService.login()
      navigate(Page.Home)
    } catch (error) {
      noticeMsgError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Flex className={containerCss} align="center" justify="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppCard size="2" className={boxCss} shadow>
            <Text as="div" align="center" mt="5">
              <GitHubLogoIcon width={64} height={64} />
            </Text>
            <Flex direction="column" gap="3" mt="4">
              <div>
                <Text as="div" size="2" mb="1">
                  Email
                </Text>
                <AppInput
                  placeholder="Địa chỉ email"
                  {...register("email", { required: { message: "Vui lòng nhập email", value: true } })}
                  err={errors.email?.message}
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1">
                  Mật khẩu
                </Text>
                <AppInput
                  placeholder="Mật khẩu"
                  type="password"
                  {...register("loginPass", { required: { value: true, message: "Vui lòng nhập mật khẩu" } })}
                  err={errors.loginPass?.message}
                />
                <Link size="1">Quên mật khẩu?</Link>
              </div>
              <AppButton label="Đăng Nhập" type="submit" />
              <Text size="1" mt="6" align="center">
                Chưa có tài khoản?&nbsp;
                <Link size="1" onClick={() => navigate(Page.RegisterAccount)}>
                  Đăng ký
                </Link>
              </Text>
            </Flex>
          </AppCard>
        </form>
      </Flex>
      {isLoading ? <AppProcessing /> : null}
    </>
  )
}
