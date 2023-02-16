import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks';




export const styled = () => {

    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            height: '100%',
            justifyContent: 'space-between',
        },
        optionsContainer: {
            marginHorizontal: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 50,
        },
        info:{
            marginTop: 20,
            textAlign: 'center',
            color: "#ccc",
        },
        itemRegister: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderColor: "#ccc",
            paddingVertical: 5,
            paddingHorizontal: 15,
            marginTop: 30,
            borderRadius: 4,
        },
        loginContainer: {
            alignItems: 'center',
            backgroundColor: theme.Default.bacgroundSecondary,
            paddingVertical: 20,
        },
        login : {
            color: "#2185d0",
            fontWeight: 'bold',
        },

    });
}