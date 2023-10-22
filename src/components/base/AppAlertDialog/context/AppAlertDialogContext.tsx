import React, { createContext, useState, ReactNode, useMemo, useContext } from "react"
import { AppAlertDialog } from "../AppAlertDialog"
import { IAppAlertDialogProps } from "../AppAlertDialog.type"
import { ulid } from "ulid"

export interface IAppAlertDialogApi {
  open: (config: IAppAlertDialogProps, key?: string) => void
}

export interface IAppAlertDialogContext {
  alertAPI: IAppAlertDialogApi
}

export interface IAppAlertDialogQueueItem {
  key: string
  config: IAppAlertDialogProps
}

export const AppAlertDialogContext = createContext<IAppAlertDialogContext>({
  alertAPI: {
    open: () => null,
  },
})

export const AppAlertDialogQueue = ({ children }: { children: ReactNode }) => {
  const [queueConfig, setQueueConfig] = useState<IAppAlertDialogQueueItem[]>([])

  const alertAPI = useMemo<IAppAlertDialogApi>(() => {
    return {
      open: (config: IAppAlertDialogProps, key: string = ulid()) => {
        setQueueConfig((queue) => [...queue, { key, config }])
      },
    }
  }, [])

  const onClose = (key: string) => {
    const newQueue = queueConfig.filter((config) => config.key !== key)
    setQueueConfig(newQueue)
  }

  return (
    <AppAlertDialogContext.Provider value={{ alertAPI }}>
      {children}
      {queueConfig.map(({ key, config }) => (
        <AppAlertDialog {...config} key={key} onClose={onClose} id={key} />
      ))}
    </AppAlertDialogContext.Provider>
  )
}

export const useAlertDialog = () => {
  return useContext(AppAlertDialogContext)
}
