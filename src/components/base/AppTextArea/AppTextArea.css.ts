import { css } from "@emotion/css"

export const textAreaCss = (isError: boolean = false) =>
  css({
    ".rt-TextAreaInput": {
      outlineWidth: 1,
      ...(isError && { border: "1px solid var(--color-focus-root)" }),
    },
  })
