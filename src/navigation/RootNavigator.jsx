import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import { Text } from "react-native";
import InfoScreen from "../screens/InfoScreen";

export default function RootNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator >
        <Tabs.Screen name="HomeTab" component={HomeNavigator} />
        <Tabs.Screen name="Cart" component={CartScreen} />
        <Tabs.Screen name="Info" component={InfoScreen} />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}
