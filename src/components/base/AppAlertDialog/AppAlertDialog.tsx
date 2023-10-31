import { AlertDialog, Box, Flex } from "@radix-ui/themes"
import React, { useCallback, useMemo } from "react"
import { AppButton } from "../AppButton"
import { btnCss, contentCss, iconCss, signalCss } from "./AppAlertDialog.css"
import { CheckIcon, ExclamationTriangleIcon, QuestionMarkIcon, Cross2Icon } from "@radix-ui/react-icons"
import { IAppAlertDialogProps } from "./AppAlertDialog.type"
import { ulid } from "ulid"
import { cx } from "@emotion/css"

export const AppAlertDialog = ({
  title,
  description,
  content,
  buttons = [],
  onCancel,
  onConfirm,
  onClose,
  cancelLabel = "Hủy",
  confirmLabel = "Xác nhận",
  type = "warning",
  icon,
  ...props
}: IAppAlertDialogProps) => {
  const renderIcon = useCallback(() => {
    if (icon) return icon

    switch (type) {
      case "error":
        return <Cross2Icon color="white" width={24} height={24} />
      case "warning":
        return <ExclamationTriangleIcon color="white" width={24} height={24} />
      case "success":
        return <CheckIcon color="white" width={24} height={24} />
      case "info":
        return <QuestionMarkIcon color="white" width={24} height={24} />
    }
  }, [])

  const confirmColor = useMemo(() => {
    switch (type) {
      case "error":
        return "red"
      case "warning":
        return "yellow"
      case "success":
        return "lime"
      case "info":
        return "teal"
    }
  }, [])

  return (
    <AlertDialog.Root {...props}>
      <AlertDialog.Content size="1" className={contentCss}>
        <div className={signalCss(type)} />
        <Box p="3" pt="5">
          <Flex gap="4">
            <div className={iconCss(type)}>{renderIcon()}</div>
            <div>
              <AlertDialog.Title size="3">{title}</AlertDialog.Title>
              <AlertDialog.Description size="1">{description}</AlertDialog.Description>
              {content}
            </div>
          </Flex>

          <Flex justify="end" gap="3" mt="3">
            {buttons.length > 0 ? (
              buttons.map(({ btnCd, className, ...props }) => (
                <AlertDialog.Action key={ulid()} onClick={() => onClose?.(btnCd)}>
                  <AppButton className={cx(btnCss, className)} {...props} />
                </AlertDialog.Action>
              ))
            ) : (
              <>
                <AlertDialog.Action onClick={() => onClose?.("close")}>
                  <AppButton label={cancelLabel} color="gray" variant="soft" onClick={onCancel} className={btnCss} />
                </AlertDialog.Action>
                <AlertDialog.Action onClick={() => onClose?.("ok")}>
                  <AppButton label={confirmLabel} color={confirmColor} onClick={onConfirm} className={btnCss} />
                </AlertDialog.Action>
              </>
            )}
          </Flex>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
