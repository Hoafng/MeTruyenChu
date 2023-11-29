import * as React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Component/HomePage';
import List from './src/Component/List';
import Navbar from './src/Component/Navbar';
import Signin from './src/Component/Signin'
import ForgotPassword from './src/Component/ForgotPassword';
import Register from './src/Component/Register';
import ResendEmail from './src/Component/ResendEmail';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from './src/Component/History';
import Notififation from './src/Component/Notification'
import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Story from './src/Component/Story';
import Chapter from './src/Component/Chapter'
import Profile from './src/Component/Profile'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const BottomTab = () => {
  return(
      <Tab.Navigator 
        initialRouteName="HomeStack"             
      >
        <Tab.Screen name="History" component={History}   options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper-variant-multiple" color={color} size={26} />
          ),
          tabBarStyle: { backgroundColor: 'black' },
        }}/>
        <Tab.Screen name="HomeStack" component={Home}  options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" color={color} size={26} />
          ),
          tabBarStyle: { backgroundColor: 'black' },
        }}/>
        <Tab.Screen name="Notififation" component={Notififation}   options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" color={color} size={26} />
          ),
          tabBarStyle: { backgroundColor: 'black' },
        }}/>
        <Tab.Screen name='Profile' component={Profile}    options={{
        title:'Hồ sơ', 
        headerStyle: {
            backgroundColor: 'black', 
          },
        headerTintColor: 'white', 
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" color={color} size={26} />
          ),
          tabBarStyle: { backgroundColor: 'black' },
        }}/>
      </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>    
      <Stack.Navigator initialRouteName="BottomTab" >
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="Story" component={Story} options={{ headerShown: false }} />
      <Stack.Screen name="Chapter" component={Chapter} options={{ headerShown: false }}/>
      <Stack.Screen name="Signin" component={Signin}  options={{ headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title:''  }} />
      <Stack.Screen name="ResendEmail" component={ResendEmail} options={{ title:''  }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;