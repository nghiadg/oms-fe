import { Avatar, Box, Flex, ScrollArea, Tooltip } from "@radix-ui/themes"
import React, { useMemo, useState } from "react"
import { containerCss, itemCss, menuToggleCss, iconCss, menuListCss } from "./SideNavigationBar.css"
import { TokensIcon, PersonIcon, ClipboardIcon } from "@radix-ui/react-icons"
import { IMenuNavigationItem } from "./SideNavigationBar.type"

export const SideNavigationBar = () => {
  const [activeItemCd] = useState<number>(0)

  const menuList = useMemo<IMenuNavigationItem[]>(
    () => [
      {
        itemCd: 0,
        title: "Quản lý nhân viên",
        icon: PersonIcon,
        onClick: () => {},
      },
      {
        itemCd: 1,
        title: "Quản lý khách hàng",
        icon: ClipboardIcon,
        onClick: () => {},
      },
      {
        itemCd: 0,
        title: "Quản lý nhân viên",
        icon: PersonIcon,
        onClick: () => {},
      },
      {
        itemCd: 1,
        title: "Quản lý khách hàng",
        icon: ClipboardIcon,
        onClick: () => {},
      },
      {
        itemCd: 0,
        title: "Quản lý nhân viên",
        icon: PersonIcon,
        onClick: () => {},
      },
      {
        itemCd: 1,
        title: "Quản lý khách hàng",
        icon: ClipboardIcon,
        onClick: () => {},
      },
    ],
    [],
  )

  return (
    <Flex width="9" className={containerCss} direction="column" align="center">
      <Box height="9" className={menuToggleCss}>
        <TokensIcon width={24} height={24} color="white" />
      </Box>
      <ScrollArea scrollbars="vertical" className={menuListCss}>
        {menuList.map(({ icon: Icon, ...menu }) => (
          <Tooltip key={menu.itemCd} content={menu.title} side="right">
            <div className={itemCss(activeItemCd === menu.itemCd)} onClick={menu.onClick}>
              <Icon width={18} height={18} className={iconCss(activeItemCd === menu.itemCd)} />
            </div>
          </Tooltip>
        ))}
      </ScrollArea>
      <Box mb="4">
        <Avatar
          fallback="A"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
        />
      </Box>
    </Flex>
  )
}
