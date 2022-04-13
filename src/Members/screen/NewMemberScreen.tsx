import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from '../styles/NewMemberStyles';
import { colors } from '../../theme/appThem';
import AwesomeAlert from 'react-native-awesome-alerts';

export const NewMemberScreen = () => {
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState(null);
    const [experience, setExperience] = useState(null);
    const [height, setHeight] = useState(null);
    const [lastNameF, setLastNameF] = useState(null);
    const [lastNameM, setLastNameM] = useState(null);
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);
    const [password, setPassword] = useState(null);
    const [sex, setSex] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);
    const [showSuccesAlert, setShowSuccesAlert] = useState<boolean>(false);

    const accesLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email, password, name, lastNameF, lastNameM,
                age, number, height, sex, experience,
            })
        };
        fetch('https://equipo4-4c-2do-parcial-awos.herokuapp.com/api/user', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (!data.err) {
                    setShowSuccesAlert(true);
                } else {
                    setShowErrorAlert(true);
                };
            });
    }

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor={colors.black}
                    style={styles.inputEmail}
                    value={email}
                />
                <TextInput
                    autoCapitalize='none'
                    keyboardType="email-address"
                    onChangeText={setPassword}
                    placeholder="Passwrod"
                    placeholderTextColor={colors.black}
                    secureTextEntry={true}
                    style={styles.inputEmail}
                    value={password}
                />
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setName}
                    value={name}
                    placeholder="Nombre"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setLastNameM}
                    value={lastNameM}
                    placeholderTextColor={colors.black}
                    placeholder="Apellido Paterno"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setLastNameF}
                    value={lastNameF}
                    placeholderTextColor={colors.black}
                    placeholder="Apellido Materno"
                    keyboardType="email-address"
                />
                <View style={styles.containerInputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setAge}
                        value={age}
                        placeholder="Edad"
                        placeholderTextColor={colors.black}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Altura"
                        placeholderTextColor={colors.black}
                        keyboardType='number-pad'
                    />
                </View>
                <View style={styles.containerInputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSex}
                        value={sex}
                        placeholder="Sexo"
                        placeholderTextColor={colors.black}
                        keyboardType="email-address"
                    />
                </View>
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setNumber}
                    value={number}
                    placeholder="Numero"
                    placeholderTextColor={colors.black}
                    keyboardType='number-pad'
                />
                <TextInput
                    style={styles.experienceInput}
                    onChangeText={setExperience}
                    value={experience}
                    placeholder="Experiencia"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                />
                <TouchableOpacity
                    style={styles.buttonSubmit}
                    onPress={accesLogin}>
                    <Text>Agregar usuario</Text>
                </TouchableOpacity>
                <AwesomeAlert
                    show={showErrorAlert}
                    showProgress={false}
                    title="Error"
                    message={`  Ocurrio un error\nIntentalo de nuevo`}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Aceptar"
                    confirmButtonColor={colors.dangerColor}
                    onConfirmPressed={() => {
                        setShowErrorAlert(false);
                    }}
                />
                <AwesomeAlert
                    show={showSuccesAlert}
                    showProgress={false}
                    title="Done"
                    message="Se agrego el miembro con exito"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Aceptar"
                    confirmButtonColor={colors.successColor}
                    onConfirmPressed={() => {
                        setShowSuccesAlert(false);
                    }}
                />
            </View>
        </KeyboardAwareScrollView>
    );
}
