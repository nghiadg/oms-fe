export interface IParamsLogin {
  email: string
  loginPass: string
}

export interface IDataLogin {
  userId: number
  name: string
  email: string
  phone: string
  accessToken: string
  refreshToken: string
}

export interface IParamsRegister {
  email: string
  name: string
  phone: string
  loginPass: string
  confirmLoginPass: string
}

export interface IDataRegister {
  success: boolean
}
