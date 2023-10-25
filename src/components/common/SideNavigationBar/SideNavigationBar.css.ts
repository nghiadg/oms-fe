import { css } from "@emotion/css"

export const containerCss = css({
  height: "100vh",
  backgroundColor: "var(--gray-0)",
  borderRight: "1px solid var(--gray-7)",
})

export const menuCss = (active: boolean = false) =>
  css({
    cursor: "pointer",
    height: 40,
    width: 40,
    borderRadius: 4,
    margin: "0 auto",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .2s ease",
    ":hover": {
      ...(!active && { backgroundColor: "var(--indigo-4)" }),
    },
    //   active
    position: "relative",
    ...(active && {
      backgroundColor: "var(--indigo-4)",
    }),
  })

export const menuIconCss = (active: boolean = false) =>
  css({
    color: active ? "var(--indigo-12)" : "var(--gray-10)",
  })
