import { css } from "@emotion/css"

export const containerCss = css({
  height: "100vh",
  backgroundColor: "var(--mauve-12)",
})

export const menuToggleCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--black-a5)",
})

export const itemCss = (active: boolean = false) =>
  css({
    cursor: "pointer",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .2s ease",
    ":hover": {
      ...(!active && { backgroundColor: "var(--neon)" }),
    },
    //   active
    position: "relative",
    ...(active && {
      ":after": {
        content: '""',
        position: "absolute",
        left: 0,
        width: 2,
        height: "100%",
        backgroundColor: "var(--neon)",
      },
    }),
  })

export const iconCss = (active: boolean = false) =>
  css({
    color: active ? "var(--neon)" : "var(--gray-1)",
  })

export const menuListCss = css({})
