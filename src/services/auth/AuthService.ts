import axios, { AxiosRequestConfig } from "axios"
import { IResponse } from "../service.type"
import { IDataLogin, IDataRegister, IParamsLogin, IParamsRegister } from "./AuthService.type"

export const AuthService = {
  login: (data: IParamsLogin, config?: AxiosRequestConfig) => {
    return axios.post<IResponse<IDataLogin>>("/v1/auth/login", data, config)
  },
  register: (data: IParamsRegister, config?: AxiosRequestConfig) => {
    return axios.post<IResponse<IDataRegister>>("/v1/auth/register", data, config)
  },
}
