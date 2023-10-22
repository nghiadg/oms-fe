import { css } from "@emotion/css"

export const rootStyle = (isError: boolean = false) => css`
  .rt-TextFieldChrome {
    outline-width: 1px;
    ${isError && { border: "1px solid var(--color-focus-root)" }}
  }
`
