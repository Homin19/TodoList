import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const BottomTab = createBottomTabNavigator();
import Todo from "../components/Todo.js"
import CalendarScreen from "../Screen/CalendarScreen.js"
import ChatBot from '../Screen/ChatBot.js'
import Login from '../Screen/Login.js'

const Tab = createBottomTabNavigator();
const TabNavigator = () => {

  return (
    <NavigationContainer>
    <BottomTab.Navigator initialRouteName="Home" 
    >
     <BottomTab.Screen name="Login" component={Login} 
        options ={{
          headerStyle:{backgroundColor:'pink'},
          headerTitle:"Login",
          headerTintColor:'white',
          headeralignItems: 'center'
        }}
      />

      <BottomTab.Screen name="Home" component={Todo} 
        options ={{
          headerTitle:"HOME",
          headerStyle:{backgroundColor:'pink'},
          headerTitle:"Home",
          headerTintColor:'white',
        }}
      />

      <BottomTab.Screen name="Calendar" component={CalendarScreen} 
        options ={{
          headerTitle:"Calendar",
          headerStyle:{backgroundColor:'pink'},
          headerTitle:"Calendar",
          headerTintColor:'white',
        }}
      />
      <BottomTab.Screen name="Chat Bot" component={ChatBot} 
        options ={{
          headerTitle:"Chat Bot",
          headerStyle:{backgroundColor:'pink'},
          headerTitle:"Chat Bot",
          headerTintColor:'white',
        }}
      />
      
    </BottomTab.Navigator>
    </NavigationContainer>
    
  );
}

export default TabNavigator