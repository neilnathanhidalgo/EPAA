import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/CuiLogin";
import HomeUA from "./src/screens/HomeUA";
import TypeUser from "./src/screens/TypeUser";
import CuiLogin from "./src/screens/CuiLogin";
import UALogin from "./src/screens/UALogin";
import HomeCui from "./src/screens/HomeCui";
import AlertaCaidaUA from "./src/screens/AlertaCaidaUA";
import AlertaCaidaCui from "./src/screens/AlertaCaidaCui";
import AlertaRangoCui from "./src/screens/AlertaRangoCui";
import AlertaAyudaCui from "./src/screens/AlertaAyudaCui";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TypeUser"
          component={TypeUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CuiLogin"
          component={CuiLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UALogin"
          component={UALogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeUA"
          component={HomeUA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeCui"
          component={HomeCui}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AlertaCaidaUA"
          component={AlertaCaidaUA}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlertaCaidaCui"
          component={AlertaCaidaCui}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlertaRangoCui"
          component={AlertaRangoCui}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlertaAyudaCui"
          component={AlertaAyudaCui}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
