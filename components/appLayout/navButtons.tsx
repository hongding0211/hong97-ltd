import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faMoon, faSun, faLanguage} from "@fortawesome/free-solid-svg-icons"
import {useRouter} from "next/router";

interface INavButtons {
  darkMode: boolean
  onDarkModeChange: (isDarkMode: boolean) => void
}

const NavButtons: React.FC<INavButtons> = props => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  function handleChangeLanguage() {
    router.push({ pathname, query }, asPath, { locale: locale === 'cn' ? 'en' : 'cn' }).then()
  }

  return (
    <div className='flex gap-x-[24px]'>
      <a href='https://github.com/hongding0211' target='_blank' rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          className='h-[20px] w-[20px] cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-150 ease-in-out'
        />
      </a>
      <FontAwesomeIcon
        icon={props.darkMode ? faSun : faMoon}
        className='h-[20px] w-[20px] cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-150 ease-in-out'
        onClick={() => props.onDarkModeChange(!props.darkMode)}
      />
      <FontAwesomeIcon
        icon={faLanguage}
        className='h-[20px] w-[20px] cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors duration-150 ease-in-out'
        onClick={handleChangeLanguage}
      />
    </div>
  )
}

export default NavButtons
