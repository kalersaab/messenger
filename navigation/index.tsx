import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalState from "../context/Globalstate";
import Login from "../screens/login";
import { StatusBar } from "react-native";
import Message from "../screens/MesageScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator>
          {/* all the screens here */}
          <Stack.Screen
            name="Homescreen"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Messagescreen"
            component={Message}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden={true} />
    </GlobalState>
  );
};
export default Navigation;
