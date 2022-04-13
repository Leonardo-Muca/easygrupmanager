import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Icon } from '@ui-kitten/components';

export const AddIcon = () => {
    const navigation = useNavigation();

    const handleOnPress = () => navigation.navigate('NewMember', {});

    const BackIcon = (props) => (
        <Icon {...props} name="arrow-back" />
    );

    return (
        <TouchableOpacity
            onPress={handleOnPress}
            style={{
                marginRight: 15,
                justifyContent: 'flex-end',
            }}
        >
            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
        </TouchableOpacity>
    );
};
