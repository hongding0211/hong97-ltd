import Head from 'next/head'
import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppLayout from '../components/appLayout/appLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>HONG | LTD</title>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <AppLayout />
    </>
  )
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
