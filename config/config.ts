export type IMenuItem = {
  key: string
  path: string
}

export const menuConfig: IMenuItem[] = [
  {
    key: 'blog',
    path: 'https://blog.hong97.ltd',
  },
  {
    key: 'projects',
    path: '/projects',
  },
  {
    key: 'about',
    path: '/about',
  },
]
