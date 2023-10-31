import { Flex, Link, Text } from "@radix-ui/themes"
import React, { useState } from "react"
import { AppCard } from "../../components/base/AppCard"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { AppInput } from "../../components/base/AppInput"
import { AppButton } from "../../components/base/AppButton"
import { boxCss, containerCss } from "./RegisterAccount.css"
import { useForm } from "react-hook-form"
import { IRegisterForm } from "./RegisterAccount.type"
import { useNavigate } from "react-router"
import { Page } from "../../routers"
import { noticeMsgError } from "../../utils/error"
import { AppProcessing } from "../../components/base/AppProcessing"
import { AuthService } from "../../services/auth"
import { validator } from "./RegisterAccount.helper"

export const RegisterAccount = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      loginPass: "",
      confirmLoginPass: "",
    },
  })

  const onSubmit = async (data: IRegisterForm) => {
    try {
      setIsLoading(true)
      await AuthService.register(data)
      navigate(Page.Login)
    } catch (error) {
      noticeMsgError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Flex className={containerCss} align="center" justify="center">
        <AppCard size="2" className={boxCss} shadow>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text as="div" align="center" mt="5">
              <GitHubLogoIcon width={64} height={64} />
            </Text>
            <Flex direction="column" gap="3" mt="4">
              <div>
                <Text as="div" size="2" mb="1">
                  Họ và tên
                </Text>
                <AppInput
                  placeholder="Nhập họ và tên"
                  {...register("name", validator.name)}
                  err={errors.name?.message}
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1">
                  Email
                </Text>
                <AppInput
                  placeholder="Nhập địa chỉ email"
                  {...register("email", validator.email)}
                  err={errors.email?.message}
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1">
                  Số điện thoại
                </Text>
                <AppInput
                  placeholder="Nhập số điện thoại"
                  {...register("phone", validator.phone)}
                  err={errors.phone?.message}
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1">
                  Mật khẩu
                </Text>
                <AppInput
                  placeholder="Nhập mật khẩu"
                  type="password"
                  {...register("loginPass", validator.loginPass)}
                  err={errors.loginPass?.message}
                />
              </div>
              <div>
                <Text as="div" size="2" mb="1">
                  Nhập lại mật khẩu
                </Text>
                <AppInput
                  placeholder="Nhập lại mật khẩu"
                  type="password"
                  {...register("confirmLoginPass", validator.confirmLoginPass)}
                  err={errors.confirmLoginPass?.message}
                />
              </div>

              <AppButton label="Đăng ký" type="submit" />
              <Text size="1" mt="6" align="center">
                Đã có tài khoản?&nbsp;
                <Link size="1" onClick={() => navigate(Page.Login)}>
                  Đăng nhập
                </Link>
              </Text>
            </Flex>
          </form>
        </AppCard>
      </Flex>
      {isLoading ? <AppProcessing /> : null}
    </>
  )
}
