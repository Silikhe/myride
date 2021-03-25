import "react-native-gesture-handler";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./app/screens/RookStackScreen";
import DrawerNavigator from "./app/components/drawer";

// const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <DrawerT.Navigator>
        <DrawerT.Screen name="Home" component={RootStackScreen} />
      </DrawerT.Navigator> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
