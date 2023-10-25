import { ulid } from "ulid"
import { IAppAlertDialogProps } from "../AppAlertDialog.type"

export interface IAppAlertDialogQueueItem {
  key: string
  config: IAppAlertDialogProps
}

export type Func = () => void

let store: IAppAlertDialogQueueItem[] = []
let listeners: Func[] = []

export const AppAlertDialogStore = {
  subscribe(listener: Func) {
    listeners = [...listeners, listener]
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  },

  getSnapshot() {
    return store
  },
}

const emit = () => {
  for (const listener of listeners) {
    listener()
  }
}

export interface IResAppAlertDialog {
  btnCd: string
}

export const dialogApi = {
  open(config: IAppAlertDialogProps, key: string = ulid()) {
    return new Promise<IResAppAlertDialog>((resolve) => {
      const onClose = (btnCd: string) => {
        return resolve({
          btnCd,
        })
      }

      store = [
        ...store,
        {
          key,
          config: {
            ...config,
            onClose,
          },
        },
      ]
      emit()
    })
  },
}
