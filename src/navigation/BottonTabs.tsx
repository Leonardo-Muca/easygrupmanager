import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MemberStack } from './MembersStack';
import { EventStack } from './EventStack';

const Tab = createBottomTabNavigator();

export const BottonTabs = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'black',
                tabStyle: {
                    height: 49,
                    alignSelf: 'center',
                },
                style: {
                    height: 60,
                },
                labelStyle: {
                    fontSize: 10,
                    textAlign: 'center',
                    fontWeight: '500',
                },
            }}
        >
            <Tab.Screen
                name="Member"
                component={MemberStack}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Event"
                component={EventStack}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}
