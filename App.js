import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements'

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import Readerscreen from './src/screens/scan';
import Aboutscreen from './src/screens/about';
import Morescreen from './src/screens/more';
import SupportScreen from './src/screens/support';
import ProfileScreen from './src/screens/profile';
import SettingScreen from './src/screens/setting';
import ListScreen from './src/screens/list';
import firebaseConfig from './src/component/firebase';

const Stack = createNativeStackNavigator();

// firebaseConfig();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{headerTitle: "BUPC QR Code Attendance App"}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
          
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
          
        />
        <Stack.Screen
          name="Reader"
          component={Readerscreen}
          options={{
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="About"
          component={Aboutscreen}
          options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen 
          name="More"
          component={Morescreen}
          options={{
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen 
          name="Help"
          component={SupportScreen}
          options={{
            headerTitle: "Help & Support",
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen 
          name="Settings"
          component={SettingScreen}
          options={{
            headerStyle: {
              backgroundColor: "#191970",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;