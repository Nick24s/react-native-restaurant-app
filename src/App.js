import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      {/* <SafeAreaView> */}
        <RootNavigator />
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}
