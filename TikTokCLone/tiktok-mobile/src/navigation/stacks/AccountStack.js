import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AccountScreen,ChangeDescriptionScreen,ChangeInstagram,ChangeNameScreen,ChangeWebsiteScreen,SettingsScreen } from '../../screens/Account'
import { screen } from '../../utils'

const Stack = createNativeStackNavigator();

export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.account.account} 
                component={AccountScreen} 
                options={{  title: '' }}
                />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen 
                    name={screen.account.settings} 
                    component={SettingsScreen} 
                    options={{  title: 'Ajustes' }}
                    />
                <Stack.Screen 
                    name={screen.account.changeName} 
                    component={ChangeNameScreen} 
                    options={{  title: 'Cambiar nombre' }}
                    />
                <Stack.Screen 
                    name={screen.account.changeDescription} 
                    component={ChangeDescriptionScreen} 
                    options={{  title: 'Cambiar descripción' }}
                    />
                <Stack.Screen 
                    name={screen.account.changeWebsite} 
                    component={ChangeWebsiteScreen} 
                    options={{  title: 'Cambiar sitio web' }}
                    />
                <Stack.Screen 
                    name={screen.account.changeInstagram} 
                    component={ChangeInstagram} 
                    options={{  title: 'Cambiar Instagram' }}
                    />
            </Stack.Group>
        </Stack.Navigator>
    );
}