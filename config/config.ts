export type IMenuItem = {
  key: string
  title: string
  path: string
}

export const menuConfig: IMenuItem[] = [
  {
    key: 'blog',
    title: '博客',
    path: 'https://blog.hong97.ltd',
  },
  {
    key: 'projects',
    title: '项目',
    path: '/projects',
  },
  {
    key: 'about',
    title: '关于我',
    path: '/about',
  },
]
