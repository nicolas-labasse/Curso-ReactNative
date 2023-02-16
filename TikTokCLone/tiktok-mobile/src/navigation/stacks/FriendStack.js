import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FriendScreen } from '../../screens/Friends'
import { screen } from '../../utils'

const Stack = createNativeStackNavigator();

export function FriendStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.friend.friend} 
                component={FriendScreen} 
                options={{  headerShown: false }}
                />
        </Stack.Navigator>
    );
}