import React from "react"

export type IMenuItem = {
  key: string
  title: string
  // components: React.FC
}

export const menuConfig: IMenuItem[] = [
  {
    key: 'blog',
    title: '博客',
  },
  {
    key: 'projects',
    title: '项目',
  },
  {
    key: 'about',
    title: '关于我',
  },
]
