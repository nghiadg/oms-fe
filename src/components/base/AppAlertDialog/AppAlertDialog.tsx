import { AlertDialog, Box, Flex } from "@radix-ui/themes"
import React, { useCallback, useMemo } from "react"
import { AppButton } from "../AppButton"
import { contentStyle, iconStyle, signalStyle } from "./AppAlertDialog.styles"
import { CheckIcon, ExclamationTriangleIcon, QuestionMarkIcon, Cross2Icon } from "@radix-ui/react-icons"
import { IAppAlertDialogProps } from "./AppAlertDialog.type"
import { ulid } from "ulid"

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
  id = "",
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
    <AlertDialog.Root defaultOpen={true} {...props}>
      <AlertDialog.Content size="1" className={contentStyle}>
        <div className={signalStyle(type)} />
        <Box p="3" pt="5">
          <Flex gap="4">
            <div className={iconStyle(type)}>{renderIcon()}</div>
            <div>
              <AlertDialog.Title size="3">{title}</AlertDialog.Title>
              <AlertDialog.Description size="1">{description}</AlertDialog.Description>
              {content}
            </div>
          </Flex>

          <Flex justify="end" gap="3" mt="3">
            {buttons.length > 0 ? (
              buttons.map((props) => (
                <AlertDialog.Action key={ulid()} onClick={() => onClose?.(id)}>
                  <AppButton {...props} />
                </AlertDialog.Action>
              ))
            ) : (
              <>
                <AlertDialog.Action onClick={() => onClose?.(id)}>
                  <AppButton label={cancelLabel} color="gray" variant="soft" onClick={onCancel} />
                </AlertDialog.Action>
                <AlertDialog.Action onClick={() => onClose?.(id)}>
                  <AppButton label={confirmLabel} color={confirmColor} onClick={onConfirm} />
                </AlertDialog.Action>
              </>
            )}
          </Flex>
        </Box>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}
