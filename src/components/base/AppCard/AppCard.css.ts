import { css } from "@emotion/css"

export const cardCss = (shadow: boolean = false) =>
  css({
    ...(shadow && {
      ":after": {
        boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
      },
    }),
  })
