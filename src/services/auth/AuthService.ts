import axios, { AxiosRequestConfig } from "axios"
import { IResponse } from "../service.type"
import { IDataLogin, IParamsLogin } from "./AuthService.type"

export const AuthService = {
  login: (data: IParamsLogin, config?: AxiosRequestConfig) => {
    return axios.post<IResponse<IDataLogin>>("/v1/auth/login", data, config)
  },
}
