import { Avatar, DropdownMenu, Flex, ScrollArea, Tooltip } from "@radix-ui/themes"
import React, { useMemo, useState } from "react"
import { containerCss, menuCss, menuIconCss } from "./SideNavigationBar.css"
import { PersonIcon, ClipboardIcon } from "@radix-ui/react-icons"
import { IMenuNavigationItem } from "./SideNavigationBar.type"

export const SideNavigationBar = () => {
  const [activeMenuCd, setActiveMenuCd] = useState<number>(0)

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
        itemCd: 2,
        title: "Quản lý nhân viên",
        icon: PersonIcon,
        onClick: () => {},
      },
      {
        itemCd: 3,
        title: "Quản lý khách hàng",
        icon: ClipboardIcon,
        onClick: () => {},
      },
      {
        itemCd: 4,
        title: "Quản lý nhân viên",
        icon: PersonIcon,
        onClick: () => {},
      },
      {
        itemCd: 5,
        title: "Quản lý khách hàng",
        icon: ClipboardIcon,
        onClick: () => {},
      },
    ],
    [],
  )

  return (
    <>
      <Flex width="9" className={containerCss} direction="column" align="center" justify="center" py="4" gap="4">
        <ScrollArea scrollbars="vertical">
          {menuList.map(({ icon: Icon, ...menu }) => (
            <Tooltip key={menu.itemCd} content={menu.title} side="right">
              <div
                className={menuCss(activeMenuCd === menu.itemCd)}
                onClick={() => {
                  setActiveMenuCd(menu.itemCd)
                  menu.onClick()
                }}
              >
                <Icon width={18} height={18} className={menuIconCss(activeMenuCd === menu.itemCd)} />
              </div>
            </Tooltip>
          ))}
        </ScrollArea>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <div>
              <Avatar fallback="N" />
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>Share</DropdownMenu.Item>
            <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              Delete
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </>
  )
}
