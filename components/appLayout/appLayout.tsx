import React, {useState} from "react"
import Logo from "../logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical, faEnvelope, faXmark} from "@fortawesome/free-solid-svg-icons";
import Divider from "../divider";
import NavButtons from "./navButtons";
import useDarkMode from 'use-dark-mode'
import {faWeixin} from "@fortawesome/free-brands-svg-icons"
import {menuConfig} from "../../config/config"
import Link from "next/link";
import {animated, useSpring} from "@react-spring/web";
import { useTranslation } from 'next-i18next';

interface IAppLayout {
  children?: React.ReactNode
}

const AppLayout: React.FC<IAppLayout> = props => {
  const [showMenu, setShowMenu] = useState(false)

  const darkMode = useDarkMode(false, {
    onChange: val => {
      if (val) {
        document.documentElement.className = 'dark'
      } else {
        document.documentElement.className = 'light'
      }
    },
  })
  const [menuContainerStyle, menuContainerApi] = useSpring( () => {})
  const [lineStyle, lineApi] = useSpring( () => {})
  const [menuItemStyle, menuItemApi] = useSpring( () => {})
  const { t } = useTranslation('common')

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
      }
    })
    lineApi.start({
      from: {
        scale: 0,
        x: '-50%',
      },
      to: {
        scale: 1,
        x: '0',
      }
    })
    menuItemApi.start({
      from: {opacity: 0},
      to: {opacity: 1},
    })
    setShowMenu(!showMenu)
  }

  return (
    <div className='text-neutral-900 dark:text-neutral-50'>
      <nav
        className='h-[64px] flex items-center justify-between px-5 sticky top-0 backdrop-blur-xl backdrop-saturate-150 bg-white/[0.5] dark:bg-black/[0.5] z-20'>
        <Logo width={20} className='fill-neutral-800 dark:fill-neutral-100'/>
        <FontAwesomeIcon
          icon={showMenu ? faXmark : faEllipsisVertical}
          className='h-[20px] px-3 cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out sm:hidden'
          onClick={handleClickShowMenu}
        />

        <div className='items-center hidden sm:flex'>
          <div className='flex gap-x-[24px]'>
            {
              menuConfig.map(m => (
                <Link key={m.key} href={m.path} className='cursor-pointer hover:font-medium'>{t(`nav.${m.key}`)}</Link>
              ))
            }
          </div>
          <div className='w-[1px] h-[20px] bg-neutral-300 dark:bg-neutral-600 mx-[30px]'/>
          <NavButtons darkMode={darkMode.value} onDarkModeChange={handleChangeDarkMode}/>
        </div>
      </nav>
      {
        showMenu &&
        (
          <animated.div
            style={{...menuContainerStyle}}
            className='sm:hidden fixed top-[64px] left-0 right-0 bottom-0 bg-white dark:bg-black z-10'
          >
            <div className='grid grid-cols-1 mx-5 dark:divide-neutral-300'>
              {menuConfig.map(m => (
                <div key={m.key}>
                  <animated.span style={{...menuItemStyle}}>
                    <Link href={m.path} className='block my-4 cursor-pointer hover:font-medium'>{t(`nav.${m.key}`)}</Link>
                  </animated.span>
                  <animated.div style={{...lineStyle}}>
                    <Divider />
                  </animated.div>
                </div>
              ))}
              <animated.div style={{...menuItemStyle}} className='flex w-full justify-end pt-5'>
                <NavButtons darkMode={darkMode.value} onDarkModeChange={handleChangeDarkMode}/>
              </animated.div>
            </div>
          </animated.div>
        )
      }

      <div className='min-h-[calc(100vh-64px)] flex flex-col justify-between'>
        <div className='p-5'>
          {props.children}
        </div>

        <footer className='bg-black w-full p-5 text-xs font-light text-neutral-200'>
          <div className='flex flex-col sm:flex-row gap-x-10 gap-y-3'>
            <div className='flex flex-col gap-y-1'>
              <span className='font-medium'>{t('contact')}</span>
              <span><FontAwesomeIcon icon={faEnvelope} className='mr-1 text-[10px]'/>keith.dh@hotmail.com</span>
              <span><FontAwesomeIcon icon={faWeixin} className='mr-1 text-[10px]'/>1479224723</span>
            </div>

            <div className='flex flex-col gap-y-1'>
              <span className='font-medium'>{t('myProject')}</span>
              <a
                href='https://hong97.ltd/walkingcalc/'
                target='_blank' rel="noreferrer"
                className='text-sky-400 hover:underline'
              >Walking Calculator</a>
              <a
                href='https://hong97.ltd/sso/login'
                target='_blank' rel="noreferrer"
                className='text-sky-400 hover:underline'

              >Single Sign On</a>
            </div>
          </div>

          <div className='h-[1px] bg-neutral-300 my-3'/>

          <div className='flex gap-x-2 gap-y-1 flex-wrap'>
            <span>Copyright © {new Date().getFullYear()} hong97.ltd. </span>
            <a
              href='https://github.com/hongding0211/hong97-ltd'
              target='_blank' rel="noreferrer"
              className='hover:underline'
            >Github Repo</a>
            <a
              href='https://beian.miit.gov.cn/#/Integrated/index'
              target='_blank' rel="noreferrer"
              className='hover:underline'
            >沪 ICP 备 2022003448 号
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default AppLayout
