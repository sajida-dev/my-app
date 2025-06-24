import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import VerifyEmail from './components/VerifyEmail';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Profile} name='Profile' />
        <Stack.Screen component={Login} name='Login' />
        <Stack.Screen component={VerifyEmail} name='Verfiy Email' />
        <Stack.Screen component={Home} name='Home' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({


});

