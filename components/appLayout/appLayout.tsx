import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsisVertical,
  faEnvelope,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import useDarkMode from 'use-dark-mode'
import { faWeixin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import { useTranslation } from 'next-i18next'
import { menuConfig } from '../../config/config'
import NavButtons from './navButtons'
import Divider from '../divider'
import Logo from '../logo'

interface IAppLayout {
  children?: React.ReactNode
}

const AppLayout: React.FC<IAppLayout> = (props) => {
  const [showMenu, setShowMenu] = useState(false)

  const darkMode = useDarkMode(false, {
    onChange: (val) => {
      if (val) {
        document.documentElement.className = 'dark'
      } else {
        document.documentElement.className = 'light'
      }
    },
  })
  const [menuContainerStyle, menuContainerApi] = useSpring(() => {})
  const [lineStyle, lineApi] = useSpring(() => {})
  const [menuItemStyle, menuItemApi] = useSpring(() => {})
  const { t } = useTranslation('common')

  useEffect(() => {
    function resize() {
      const c = document.querySelector<HTMLElement>('.app-layout-content')
      if (!c) {
        return
      }
      c.style.minHeight = `${window.innerHeight - 64}px`
    }
    resize()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  function handleChangeDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      darkMode.enable()
    } else {
      darkMode.disable()
    }
  }

  function handleClickShowMenu() {
    menuContainerApi.start({
      from: {
        y: -10,
        opacity: 0,
      },
      to: {
        y: 0,
        opacity: 1,
      },
    })
    lineApi.start({
      from: {
        scale: 0,
        x: '-50%',
      },
      to: {
        scale: 1,
        x: '0',
      },
    })
    menuItemApi.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    })
    setShowMenu(!showMenu)
  }

  return (
    <div className="text-neutral-900 dark:text-neutral-50">
      <nav className="sticky top-0 z-20 flex h-[64px] items-center justify-between bg-white/[0.5] px-5 backdrop-blur-xl backdrop-saturate-150 dark:bg-black/[0.5]">
        <Logo width={20} className="fill-neutral-800 dark:fill-neutral-100" />
        <FontAwesomeIcon
          icon={showMenu ? faXmark : faEllipsisVertical}
          className="h-[20px] cursor-pointer px-3 transition-transform duration-150 ease-in-out hover:scale-110 sm:hidden"
          onClick={handleClickShowMenu}
        />

        <div className="hidden items-center sm:flex">
          <div className="flex gap-x-[24px]">
            {menuConfig.map((m) => (
              <Link
                key={m.key}
                href={m.path}
                className="cursor-pointer hover:font-medium"
              >
                {t(`nav.${m.key}`)}
              </Link>
            ))}
          </div>
          <div className="mx-[30px] h-[20px] w-[1px] bg-neutral-300 dark:bg-neutral-600" />
          <NavButtons
            darkMode={darkMode.value}
            onDarkModeChange={handleChangeDarkMode}
          />
        </div>
      </nav>
      {showMenu && (
        <animated.div
          style={{ ...menuContainerStyle }}
          className="fixed top-[64px] left-0 right-0 bottom-0 z-10 bg-white dark:bg-black sm:hidden"
        >
          <div className="mx-5 grid grid-cols-1 dark:divide-neutral-300">
            {menuConfig.map((m) => (
              <div key={m.key}>
                <animated.span style={{ ...menuItemStyle }}>
                  <Link
                    href={m.path}
                    className="my-4 block cursor-pointer hover:font-medium"
                  >
                    {t(`nav.${m.key}`)}
                  </Link>
                </animated.span>
                <animated.div style={{ ...lineStyle }}>
                  <Divider />
                </animated.div>
              </div>
            ))}
            <animated.div
              style={{ ...menuItemStyle }}
              className="flex w-full justify-end pt-5"
            >
              <NavButtons
                darkMode={darkMode.value}
                onDarkModeChange={handleChangeDarkMode}
              />
            </animated.div>
          </div>
        </animated.div>
      )}

      <div className="app-layout-content flex flex-col justify-between">
        <div className="p-5">{props.children}</div>

        <footer className="w-full bg-black p-5 text-xs font-light text-neutral-200">
          <div className="flex flex-col gap-x-10 gap-y-3 sm:flex-row">
            <div className="flex flex-col gap-y-1">
              <span className="font-medium">{t('contact')}</span>
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-1 text-[10px]"
                />
                keith.dh@hotmail.com
              </span>
              <span>
                <FontAwesomeIcon icon={faWeixin} className="mr-1 text-[10px]" />
                1479224723
              </span>
            </div>

            <div className="flex flex-col gap-y-1">
              <span className="font-medium">{t('myProject')}</span>
              <a
                href="https://hong97.ltd/walkingcalc/"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-sky-400 hover:underline"
              >
                Walking Calculator
              </a>
              <a
                href="https://hong97.ltd/sso/login"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-sky-400 hover:underline"
              >
                Single Sign On
              </a>
            </div>
          </div>

          <div className="my-3 h-[1px] bg-neutral-300" />

          <p>
            <span>Copyright ?? {new Date().getFullYear()} hong97.ltd. </span>
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer hover:underline"
            >
              ??? ICP ??? 2022003448 ???
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
