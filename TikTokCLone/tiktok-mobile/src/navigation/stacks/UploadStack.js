import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PublishVideosScreen,UploadScreen } from '../../screens/Uploads'
import { screen } from '../../utils'

const Stack = createNativeStackNavigator();

export function UploadStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={screen.upload.upload} 
                component={UploadScreen} 
                options={{  headerShown: false }}
                />
            <Stack.Screen 
                name={screen.upload.publishVideo} 
                component={PublishVideosScreen} 
                options={{  headerShown: false }}
                />
        </Stack.Navigator>
    );
}