import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeEventScreen } from '../Event/Screen/HomeEventScreen';
import { AddNewEventScreen } from '../Event/Screen/AddNewEventScreen';
import { InfromationEventScreen } from '../Event/Screen/InfromationEventScreen';
import { EventScreen } from '../Event/Screen/EventScreen';
import { Login } from '../Login/screen/Login';


const Stack = createNativeStackNavigator();

export const EventStack = () => {
    return (
        <Stack.Navigator
            screenOptions={(route) => ({
                headerBackVisible: true,
                headerRightContainerStyle: {
                    marginRight: 20,
                    alignSelf: 'center',
                },
                headerStyle: {
                    backgroundColor: '#FF8933'
                },
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerBackButtonMenuEnabled: false,
                headerTintColor: 'white',
            })}>
            <Stack.Screen
                name='HomeEvent'
                options={{
                    title: 'Home Events'
                }}
                component={HomeEventScreen}
            />
            <Stack.Screen
                name='MyEvents'
                options={{
                    title: 'My Events'
                }}
                component={EventScreen}
            />
            <Stack.Screen
                name='InformationEvent'
                component={InfromationEventScreen}
            />
            <Stack.Screen
                name='AddEvent'
                options={{
                    title: 'New Event'
                }}
                component={AddNewEventScreen}
            />
        </Stack.Navigator>
    )
}
