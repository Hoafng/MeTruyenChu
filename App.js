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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
      <Stack.Screen name="Navbar" component={Navbar} />
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signin}  options={{ headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ title:''  }} />
      <Stack.Screen name="ResendEmail" component={ResendEmail} options={{ title:''  }}/>
    </Stack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>    
      <Tab.Navigator initialRouteName="HomeStack">
      <Tab.Screen name="History" component={History}  options={{ headerShown: false }}/>
      <Tab.Screen name="HomeStack" component={HomeStack}  options={{ headerShown: false }}/>
      <Tab.Screen name="Notififation" component={Notififation}  options={{ headerShown: false }}/>
      <Tab.Screen name='LoginStack' component={LoginStack}   options={{headerShown: false} }/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;