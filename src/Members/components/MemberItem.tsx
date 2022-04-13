import React from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/OnboardingStyles';

export interface Member {
    age: number;
    email: string;
    experience: string;
    height: number;
    lastNameF: string;
    lastNameM: string;
    name: string;
    number: number;
    sex: string;
}

interface Props {
    item: Member;
    index: number;
}

export const MemberItem = ({ item, index }: Props) => {
    const navigation = useNavigation();
    const handleToClick = (item: Member) => navigation.navigate('Information', { member: item })

    return (
        <TouchableOpacity key={index}
            style={styles.card}
            onPress={() => handleToClick(item)}
        >
            <View style={styles.containerImage}>
                <Image style={styles.img} source={require('../../assets/img/JBFAlogo.jpeg')}/>
            </View>
            <View style={{ paddingTop: 80 }}>
                <Text style={styles.name}>
                    <Text style={{ fontWeight: 'bold' }}> Nombre: </Text>{item.name} {item.lastNameM} {item.lastNameF}
                </Text>
                <View style={styles.information}>
                    <Text style={styles.name}>
                        <Text style={{ fontWeight: 'bold' }}> Años: </Text> {item.age}
                    </Text>
                    <Text style={styles.name}>
                        <Text style={{ fontWeight: 'bold' }}> Numero: </Text> {item.number}
                    </Text>
                </View>
                <Text style={styles.name}>
                    <Text style={{ fontWeight: 'bold' }}> Experiencia: </Text> {item.experience}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
