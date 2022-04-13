import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
} from 'react-native';

import { AddUserIcon } from '../../assets';

import { styles } from '../styles/InformationMemberStyles'

export const InformationMember = (route) => {
    const {
        member
    } = route.route.params

    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image style={styles.img} source={require('../../assets/img/JBFAlogo.jpeg')} />
            </View>
            <View style={styles.containerInformation}>
                <Text style={styles.name}>{member.name} {member.lastNameM} {member.lastNameF}</Text>
                <View style={styles.line}></View>
                <View style={styles.information}>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: 'bold' }}> Años: </Text>{member.age}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: 'bold' }}> Numero: </Text>{member.number}
                    </Text>
                </View>
                <View style={{ paddingTop: 5 }}>
                    <Text style={styles.text}>Email: {member.email} </Text>
                </View>
                <View style={styles.information}>
                    <Text style={styles.text}>
                        {/* <Text style={styles.text}>Enfermedades: {member.disease} </Text> */}
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.text}>Altura: {member.height} </Text>
                    </Text>
                </View>
                <View style={styles.information}>
                    <Text style={styles.text}>
                        <Text style={styles.text}>Sexo: {member.sex} </Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.text}>Experiencia: {member.experience} </Text>
                    </Text>
                </View>
            </View>
        </View>
    )
}
