import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import VerifyEmail from './src/screens/VerifyEmail';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import Register from './src/screens/Register';
import ForgotPassword from './src/screens/ForgotPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name='LemonPie' />
        <Stack.Screen component={Profile} name='Profile' />
        <Stack.Screen component={Register} name='Register' />
        <Stack.Screen component={Login} name='Login' />
        <Stack.Screen component={VerifyEmail} name='Verfiy Email' />
        <Stack.Screen component={ForgotPassword} name='Forgot Password' />
      </Stack.Navigator>
    </NavigationContainer>);
}

const styles = StyleSheet.create({});



