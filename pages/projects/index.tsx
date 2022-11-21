import AppLayout from "../../components/appLayout/appLayout";
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

const Projects: React.FC = () => {
  const { t } = useTranslation('projects')

  return (
    <AppLayout>
      <article className='prose prose-sm sm:prose-base prose-neutral dark:prose-invert'>
        <h1>{t('title')}</h1>
        <p>
          To be continued
        </p>
      </article>
    </AppLayout>
  )
}

export default Projects

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projects'])),
    },
  };
}
