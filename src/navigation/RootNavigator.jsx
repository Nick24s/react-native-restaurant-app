import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import { NavigationContainer } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import InfoScreen from "../screens/InfoScreen";
import { Ionicons } from "@expo/vector-icons";

export default function RootNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen 
        name="HomeTab" 
        component={HomeNavigator} 
        options={{
            title : 'Home',
            headerShown : false,
            tabBarIcon : ({color, size}) => <Ionicons name="home" size={size} color={color} />,
            }}/>
        <Tabs.Screen 
        name="Cart"
        component={CartScreen}
        options={{
           tabBarIcon : ({color, size}) => <Ionicons name="cart" size={size} color={color} />
        }}
        />
        <Tabs.Screen 
        name="Info"
        component={InfoScreen}
        options={{
           tabBarIcon : ({color, size}) => <Ionicons name="information-circle" size={size} color={color} />
        }}
        />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}
