import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RootNavigator from "./navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import CartProvider from "./context/CartProvider";

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="auto" />
      <CartProvider>
        <RootNavigator />
      </CartProvider>
    </NavigationContainer>
  );
}
