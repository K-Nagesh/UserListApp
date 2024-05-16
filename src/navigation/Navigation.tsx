import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import UserListScreen from "../screens/UserListScreen";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import EmptyScreen from "../screens/EmptyScreen";

const Stack = createStackNavigator();

const StackNavigation: React.FC = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="firstScreen" component={Home} options={{headerShown:false}} />
        <Stack.Screen
          name="EmptyScreen"
          component={EmptyScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
  );
};

export default StackNavigation;
