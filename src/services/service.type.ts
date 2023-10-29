export interface IResponse<TData> {
  data: TData
  status: number
  message: string
}
