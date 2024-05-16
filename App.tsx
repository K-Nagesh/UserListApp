import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import UserListScreen from "./src/screens/UserListScreen";
import Home from "./src/screens/Home";
import StackNavigation from "./src/navigation/Navigation";
import { View } from "react-native";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View style={{flex:1}}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigation} options={{headerShown:false}} />
        <Drawer.Screen
          name="List Customers"
          component={UserListScreen}
          options={{headerShown:false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
