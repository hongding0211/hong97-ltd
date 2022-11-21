import React, {useState} from "react"
import {IMenuItem} from "../../config/config";
import Logo from "../logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import Divider from "../divider";
import NavButtons from "./navButtons";
import useDarkMode from 'use-dark-mode'

interface IAppLayout {
  menuConfig: IMenuItem[]
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

  function handleChangeDarkMode(isDarkMode: boolean) {
    if (isDarkMode) {
      darkMode.enable()
    } else {
      darkMode.disable()
    }
  }

  return (
    <div className='text-neutral-900 dark:text-neutral-50'>
      <nav
        className='h-[64px] flex items-center justify-between px-5 sticky top-0 backdrop-blur-xl backdrop-saturate-150 bg-white/[0.7] dark:bg-black/[0.7] backdrop-brightness-125'>
        <Logo width={20} className='fill-neutral-800 dark:fill-neutral-100'/>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className='h-[20px] px-3 cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out sm:hidden'
          onClick={() => setShowMenu(!showMenu)}
        />
      </nav>
      {
        showMenu &&
        (<div className='h-[calc(100vh-64px)] sm:hidden'>
          <Divider/>
          <div className='grid grid-cols-1 mx-5 divide-y divide-neutral-600 dark:divide-neutral-300'>
            {props.menuConfig.map(m => (
              <div key={m.key}>
                <div className='my-4 cursor-pointer hover:font-medium'>{m.title}</div>
              </div>
            ))}
            <div className='flex w-full justify-end pt-5'>
              <NavButtons darkMode={darkMode.value} onDarkModeChange={handleChangeDarkMode}/>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default AppLayout
