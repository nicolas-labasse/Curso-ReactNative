import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screen } from '../utils'
import { Icon } from 'react-native-elements';
import { HomeStack,FriendStack,UploadStack,NotificationsStack,AccountStack } from './stacks'

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    return (
       <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: '#fff',
                tabBarStyle: { backgroundColor: '#252525',borderTopWidth:0 },
                tabBarIcon: (props) => tabIcon({route,...props}),
       })}>
              <Tab.Screen name={ screen.home.tab } component={HomeStack} options={{headerShown: false, title:'Inicio'}} />
              <Tab.Screen name={ screen.friend.tab } component={FriendStack} options={{headerShown: false, title:'Amigos'}} />
              <Tab.Screen name={ screen.upload.tab } component={UploadStack} options={{headerShown: false,tabBarLabelStyle:{display:'none'},}} />
              <Tab.Screen name={ screen.notifications.tab } component={NotificationsStack} options={{headerShown: false, title:'Notificaciones'}} />
              <Tab.Screen name={ screen.account.tab } component={AccountStack} options={{headerShown: false , title:'Perfil'}} />
       </Tab.Navigator>
    );
}

function tabIcon(props) {
    const { route,size,color,focused } = props;
     
    let iconName = 'plus';

    if (route.name === screen.home.tab) {
        iconName = 'home';
    }  
    if (route.name === screen.friend.tab) {
        iconName = focused ? 'account-multiple' : 'account-multiple-outline';
    } 
    if (route.name === screen.notifications.tab) {
        iconName = focused ? 'message-processing' : 'message-processing-outline';
    }
    if (route.name === screen.account.tab) {
        iconName = focused ? 'account' : 'account-outline';
    }
    if(route.name === screen.upload.tab){
        return (
            <Icon type='material-community' name='plus' size={size} color={color} 
            containerStyle={{
                backgroundColor:'#fff',
                paddingHorizontal:10,
                paddingVertical:5,
                borderRadius:6,
            }}
            iconStyle={{
                color:'#000',
                fontSize:14,
            }}
            />
        );
    }
    

    return (
        <Icon type='material-community' name={iconName} size={size} />
    );
}

