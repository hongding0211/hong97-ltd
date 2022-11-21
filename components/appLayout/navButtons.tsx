import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons"

interface INavButtons {
  darkMode: boolean
  onDarkModeChange: (isDarkMode: boolean) => void
}

const NavButtons: React.FC<INavButtons> = props => {return (
    <div className='flex gap-x-[24px]'>
      <a href='https://github.com/hongding0211' target='_blank' rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          className='h-[20px] w-[20px] cursor-pointer text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-150 ease-in-out'
        />
      </a>
      <FontAwesomeIcon
        icon={props.darkMode ? faSun : faMoon}
        className='h-[20px] w-[20px] cursor-pointer text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-150 ease-in-out'
        onClick={() => props.onDarkModeChange(!props.darkMode)}
      />
    </div>
  )
}

export default NavButtons
