import AppLayout from "../components/appLayout/appLayout"
import {menuConfig} from "../config/config"
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>HONG</title>
      </Head>
      <AppLayout
        menuConfig={menuConfig}
      />
    </>
  )
}
