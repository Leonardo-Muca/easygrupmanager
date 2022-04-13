import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { Event } from '../interfaces/EventInterface';
import { styles } from '../styles/EventItemStyles';

interface Props {
    item: Event;
    index: number;
}

export const EventItem = ({ item, index }: Props) => {
    const navigation = useNavigation();
    const handleToClick = (item: Event) => navigation.navigate('InformationEvent', { member: item })

    return (
        <TouchableOpacity key={index}
            style={styles.card}
            onPress={() => handleToClick(item)}
        >
            <View style={styles.containerImage}>
                <Image style={styles.img} source={require('../../assets/img/JBFAlogo.jpeg')} />
            </View>
            <View style={{ paddingTop: 80 }}>
                <Text style={styles.name}>
                    <Text style={{ fontWeight: 'bold' }}> Nombre del Evento: </Text>{item.name ? item.name: 'N/A'}
                </Text>
                <View style={styles.information}>
                    <Text style={styles.name}>
                        <Text style={{ fontWeight: 'bold' }}> Numero de Parejas: </Text>{item.couplesNumber ? item.couplesNumber : '0'}
                    </Text>
                    <Text style={styles.name}>
                        <Text style={{ fontWeight: 'bold' }}> Precio: </Text>${item.price ? `${item.price}.00` : '0.00'}
                    </Text>
                </View>
                <Text style={styles.name}>
                    <Text style={{ fontWeight: 'bold' }}> Fecha: </Text> {item.date ? item.date.toString().substring(0, 10) : 'N/A'}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
