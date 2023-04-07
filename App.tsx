import {StatusBar} from "expo-status-bar";

import AppNavigation from "./src/navigations/AppNavigation";

export default function App() {
  return (
      <>
        <StatusBar style="auto" />
        <AppNavigation />
      </>
  )
}
