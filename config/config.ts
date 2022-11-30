export type IMenuItem = {
  key: string
  path: string
  externalLink?: boolean
}

export const menuConfig: IMenuItem[] = [
  {
    key: 'blog',
    path: 'https://hong97.ltd/blog',
    externalLink: true,
  },
  {
    key: 'doc',
    path: 'https://doc.hong97.ltd',
    externalLink: true,
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
