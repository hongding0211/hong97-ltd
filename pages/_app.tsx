import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React, { useEffect } from 'react'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    localStorage.removeItem('darkMode')
  }, [])
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
