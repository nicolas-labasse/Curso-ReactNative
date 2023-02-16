import React from 'react'
import { View, SafeAreaView,Touchable } from 'react-native'
import { Button,Text,Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '../../../hooks'
import { screen } from '../../../utils'
import { styled } from './AuthScreen.styles'

export function AuthScreen(props) {
    const { toggleTheme } = useTheme()
    const {  navigation } = props;
    const styles = styled();
    
    const goToRegister = () => {
        navigation.navigate(screen.auth.registerEmail)
    }

    const goToLogin = () => {
        navigation.navigate(screen.auth.loginEmail)
    }
    

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.optionsContainer}>
            <Text style={styles.title}>Registrate</Text>
            <Text style={styles.info}>Crea un perfil, sigue otras cuentas y mas</Text>
            <TouchableOpacity 
            title="Register" onPress={goToRegister}>
            <Icon type="material-community" name="at"/>
            <Text>User correo electronico</Text>
            <View/>
            </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
            <Text style={styles.title}>
             ya tiene cuenta?{" "}
             <Text style={styles.login} onPress={goToLogin}> Iniciar sesion</Text>
            </Text>
            
        </View>
    </SafeAreaView>
  )
}
