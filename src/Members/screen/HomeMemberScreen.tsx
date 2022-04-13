import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Icon } from '@ui-kitten/components';

import { styles } from '../styles/HomeMemberStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeMemberScreen = ({ navigation }) => {
    const [memberName, setMemberName] = useState('');

    useEffect(() => {
        storeData();
    }, [])

    const [menu, setMenu] = useState([
        {
            name: 'Miembros',
            subTitle: 'Observa la informacion de tus miembros',
            action: () => navigation.navigate('Members', {}),
        },
        {
            name: 'Agregar nuevo miembro',
            subTitle: 'Agrega a tus nuevos miembros',
            action: () => navigation.navigate('NewMember', {}),
        }
    ]);

    const storeData = async () => {
        try {
            setMemberName(await AsyncStorage.getItem('Member'));
        } catch (e) {
            console.log(e);
        };
    };

    const renderMenu = menu.map((item) => {
        return (
            <TouchableOpacity
                onPress={item.action}
                style={styles.containerMenu}
            >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
            </TouchableOpacity>
        )
    });

    return (
        <View style={styles.homeContainer}>
            <View style={styles.container}>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.welcomeText}>Bienvenido a</Text>
                    <Text style={styles.titleText}>MyEasyGroupManager</Text>
                    <Text style={styles.nameText}>{memberName}</Text>
                </View>
            </View>
            <View style={styles.containerRenderMenu}>
                {renderMenu}
            </View>
        </View>
    );
}
