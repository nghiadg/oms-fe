import React, { useSyncExternalStore } from "react"
import { AppAlertDialog } from "../AppAlertDialog"
import { AppAlertDialogStore } from "./AppAlertDialogStore"

export const AppAlertDialogQueue = () => {
  const dialogs = useSyncExternalStore(AppAlertDialogStore.subscribe, AppAlertDialogStore.getSnapshot)

  return (
    <>
      {dialogs.map(({ key, config }) => (
        <AppAlertDialog {...config} key={key} id={key} defaultOpen={true} />
      ))}
    </>
  )
}
