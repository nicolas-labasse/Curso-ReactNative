import { View,SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Text,Input,Button } from 'react-native-elements'
import { styles } from './LoginEmailScreen.styles'
import { intialValues,validationSchema } from './LoginEmailScreen.data'
import { useFormik } from 'formik'
import { Auth } from '../../../api'
import { useAuth } from '../../../hooks'


const auth = new Auth();

export function LoginEmailScreen() {
  
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth();


  const onShowPassword = () => setShowPassword((prevState) => !prevState);


  const formik = useFormik({
    initialValues: intialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await auth.login(formValue);
        login(response)
      } catch(error){
        console.error(error);
      }
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text h1>Log in</Text>
        <Input placeholder="Email" autoCapitalize='none' 
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
        />
        <Input placeholder="Password" 
        secureTextEntry={!showPassword}
        rightIcon = {{type: 'material-community', name: showPassword ? 'eye-off-outline' : 'eye-outline', onPress: onShowPassword}}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
         />
      </View>
      <Button title="Log in" containerStyle={styles.btnContainer}
      onPress={formik.handleSubmit}
      loading={formik.isSubmitting}
      />
    </SafeAreaView>
  )
}