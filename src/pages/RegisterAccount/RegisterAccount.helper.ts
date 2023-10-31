import { RegisterOptions } from "react-hook-form"
import { IRegisterForm } from "./RegisterAccount.type"

export const validator: Record<keyof IRegisterForm, RegisterOptions<IRegisterForm>> = {
  email: {
    required: {
      value: true,
      message: "Vui lòng nhập email.",
    },
  },
  name: {
    required: {
      value: true,
      message: "Vui lòng nhập họ và tên.",
    },
  },
  phone: {
    required: {
      value: true,
      message: "Vui lòng nhập số điện thoại.",
    },
  },
  loginPass: {
    required: {
      value: true,
      message: "Vui lòng nhập mật khẩu.",
    },
  },
  confirmLoginPass: {},
}
