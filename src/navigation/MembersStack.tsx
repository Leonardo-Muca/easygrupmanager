import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MembersScreen } from '../Members/screen/Members';
import { InformationMember } from '../Members/screen/InformationMember';
import { Icon } from '@ui-kitten/components';
import { TouchableOpacity, Text } from 'react-native';
import { NewMemberScreen } from '../Members/screen/NewMemberScreen';
import { AddIcon } from '../components/AddIcon';
import { HomeMemberScreen } from '../Members/screen/HomeMemberScreen';
import { theme,colors } from '../theme/appThem';


const Stack = createNativeStackNavigator();

export const MemberStack = (navigation) => {
    const BackIcon = (props) => (
        <Icon {...props} name="arrow-back" />
    );

    return (
        <Stack.Navigator
            screenOptions={(route) => ({
                headerBackVisible: true,
                headerRightContainerStyle: {
                    alignSelf: 'center',
                },
                headerStyle: {
                    backgroundColor: theme.colors.primary,
                },
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
                headerBackButtonMenuEnabled: false,
                headerTintColor: colors.white,
            })}>
            <Stack.Screen
                name='HomeMember'
                options={{
                    title: 'Home Member'
                }}
                component={HomeMemberScreen}
            />
            <Stack.Screen
                name='Members'
                component={MembersScreen}
            />
            <Stack.Screen
                name='Information'
                component={InformationMember}
            />
            <Stack.Screen
                name='NewMember'
                component={NewMemberScreen}
                options={{
                    title: 'New Member'
                }}
            />
        </Stack.Navigator>
    )
}
