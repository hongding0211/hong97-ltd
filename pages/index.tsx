import AppLayout from "../components/appLayout/appLayout"
import {menuConfig} from "../config/config"

export default function Home() {
  return (
    <AppLayout
      menuConfig={menuConfig}
    />
  )
}
