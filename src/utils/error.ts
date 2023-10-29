import axios from "axios"
import { dialogApi } from "../components/base/AppAlertDialog"
import { IResponse } from "../services/service.type"

export const noticeMsgError = (error: unknown) => {
  console.error(error)

  let msgError = ""
  if (axios.isAxiosError<IResponse<unknown>>(error)) {
    console.log(error)
    msgError = error.response?.data.message ?? ""
  }

  return dialogApi.open({
    title: "Có lỗi xảy ra",
    description: msgError,
    type: "error",
    buttons: [
      {
        btnCd: "ok",
        label: "OK",
      },
    ],
  })
}
