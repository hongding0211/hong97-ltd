import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import AppLayout from '../../components/appLayout/appLayout'
import Image from 'next/image'
import me from '../../public/img/22-09-2022-01-31-00.jpeg'
import cat from '../../public/img/IMG_8908.jpeg'

function About() {
  const { t } = useTranslation('about')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
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
      <AppLayout>
        <article className="prose prose-sm prose-neutral mb-6 dark:prose-invert sm:mx-auto sm:mb-12 sm:prose-base lg:prose-lg">
          <Image src={me} alt="me" />
          <div className="mt-12 mb-6 sm:mt-24 sm:mb-12">
            <h1>{t('title')}</h1>
          </div>
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <figure>
            <Image src={cat} alt="cat" />
            <figcaption>{t('c1')}</figcaption>
          </figure>
          <h2>PING ME</h2>
          <ul>
            <li>Github: https://github.com/hongding0211</li>
            <li>{t('email')}: keith.dh@hotmail.com</li>
            <li>{t('wechart')}: 1479224723</li>
          </ul>
          <h2>{t('h1')}</h2>
          <ul>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>
              Logo {t('design')}{' '}
              <a href="https://miuta.club" target="_blank" rel="noreferrer">
                @muita
              </a>
            </li>
          </ul>
        </article>
      </AppLayout>
    </>
  )
}

export default About

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
  }
}
