import {StatusBar} from "expo-status-bar";
import {Provider} from "react-redux";

import store from "./src/store/store";
import AppNavigation from "./src/navigations/AppNavigation";

export default function App() {
  return (
      <Provider store={store}>
        <StatusBar style="auto" />
        <AppNavigation />
      </Provider>
  )
}
