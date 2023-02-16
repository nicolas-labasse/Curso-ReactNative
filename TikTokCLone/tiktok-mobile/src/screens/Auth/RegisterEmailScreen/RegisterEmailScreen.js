import React, {  useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { Textn,Input, Button } from 'react-native-elements';
import { styles } from './RegisterEmailScreen.styles';
import { useFormik } from 'formik';
import { initialValues,validationSchema } from './RegisterEmailScreen.data';
import { Auth } from '../../../api';



const auth = new Auth();

export function RegisterEmailScreen(props) {
  
  const { navigation } = props;

  const [showPassword, setShowPassword] = useState(false);
  const onshowPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue) => {
      try{
        await auth.register(formValue);
        navigation.goBack();

      } catch(error){
        console.error(error);
      }
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Input placeholder='Correo electronico' 
        autoCapitalize='none' 
        onChangeText={(text) => formik.setFieldValue('email',text.toLowerCase())}
        errorMessage={formik.errors.email}
        />
        <Input placeholder='Nombre' autoCapitalize='none'
        onChangeText={(text) => formik.setFieldValue('first_name',text)}
        errorMessage={formik.errors.first_name}
        />
        <Input placeholder='Username' autoCapitalize='none'
        onChangeText={(text) => formik.setFieldValue('username',text)}
        errorMessage={formik.errors.username}
        />
        <Input placeholder='Password' 
        secureTextEntry={!showPassword} 
        rightIcon={{type:"material-community", name:showPassword ? "eye-off-outline" :"eye-outline", onPress:onshowPassword}} 
        onChangeText={(text) => formik.setFieldValue('password',text)}
        errorMessage={formik.errors.password}
        />
        <Input placeholder='Repetir Password' 
        secureTextEntry={!showPassword} 
        rightIcon={{type:"material-community",  name:showPassword ? "eye-off-outline" :"eye-outline", onPress:onshowPassword}}
        onChangeText={(text) => formik.setFieldValue('repeatPassword',text)}
        errorMessage={formik.errors.repeatPassword}
        />
      </View>
      <Button title='Registrarse' containerStyle={styles.btnContainer}
      onPress = {formik.handleSubmit}
      loading={formik.isSubmitting}
      />
    </SafeAreaView>
  )
}