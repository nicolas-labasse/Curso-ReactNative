import React from 'react'
import { SafeAreaView, StyleSheet , Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen,LoginEmailScreen,RegisterEmailScreen } from '../screens/Auth';
import { useTheme } from '../hooks';
import { getNavigationTheme, screen } from '../utils';


const Stack = createStackNavigator();

export function AuthNavigation() {

const { theme } = useTheme();

const MyTheme = getNavigationTheme(theme);

  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerTransparent:true}}>
            <Stack.Screen name={ screen.auth.auth } component={AuthScreen} options={{headerShown:false}} />
            <Stack.Screen name={ screen.auth.loginEmail } component={LoginEmailScreen}  />
            <Stack.Screen name={ screen.auth.registerEmail } component={RegisterEmailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
  });