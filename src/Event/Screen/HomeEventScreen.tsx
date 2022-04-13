import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { styles } from '../styles/HomeEventStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeEventScreen = ({ navigation }) => {
    const [memberName, setMemberName] = useState('');

    useEffect(() => {
        storeData();
    }, [])
    
    const [menu, setMenu] = useState([
        {
            name: 'Eventos',
            subTitle: 'Observa la informacion de tus eventos',
            action: () => navigation.navigate('MyEvents', {}),
        },
        {
            name: 'Agregar nuevo evento',
            subTitle: 'Agrega tus nuevos eventos',
            action: () => navigation.navigate('AddEvent', {}),
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
                    <Text style={styles.welcomeText}>Administracion de eventos</Text>
                    <Text style={styles.titleText}>MyEasyGroupManager</Text>
                    <Text style={styles.nameText}>{`de ${memberName}`}</Text>
                </View>
            </View>
            <View style={styles.containerRenderMenu}>
                {renderMenu}
            </View>
        </View>
    );
}
