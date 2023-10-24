import { css } from "@emotion/css"

export const rootCss = (isError: boolean = false) =>
  css({
    ".rt-TextFieldChrome": {
      outlineWidth: 1,
      ...(isError && { border: "1px solid var(--color-focus-root)" }),
    },
  })
