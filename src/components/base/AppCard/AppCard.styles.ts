import { css } from "@emotion/css"

export const styles = (isShadow: boolean = false) => css`
  ::after {
    ${isShadow && {
      boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
    }}
  }
`
