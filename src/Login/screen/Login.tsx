import React, { useState, useEffect } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import { styles } from '../styles/LoginStyle';
import { colors } from '../../theme/appThem';

interface Props {
    onPress: (isValidateLogin: boolean) => void;
}

export const Login = ({ onPress }: Props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);

    useEffect(() => {
        accesLogin();
    }, [])

    const accesLogin = async () => {
        if (email && password) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            };
            fetch('https://equipo4-4c-2do-parcial-awos.herokuapp.com/api/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.ok === true) {
                        setShowAlert(true);
                        storeData(data.usrDB.name);
                        onPress(true);
                        setShowAlert(false);
                    } else {
                        setShowErrorAlert(true);
                    }
                });
        } else {
            console.log('Campos requeridos');
        }
    }

    const storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem('Member', value);
        } catch (e) {
            console.log(e);
        };
    }

    return (
        <View style={styles.container}>
            <View style={{ height: 200 }}>
                <Text style={styles.title}>Welcome to MyEasyGroupManager</Text>
                <Text style={styles.desigText}>Developed By {`\n`}Leonardo Muñoz Capuchino</Text>
            </View>
            <View style={styles.containerInputs}>
                <TextInput
                    autoCapitalize='none'
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor={colors.white}
                    style={styles.input}
                    value={email}
                />
                <TextInput
                    autoCapitalize='none'
                    keyboardType='email-address'
                    onChangeText={setPassword}
                    placeholder="Password"
                    placeholderTextColor={colors.white}
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={accesLogin}>
                    <Text style={styles.textLoginButton}>Login</Text>
                </TouchableOpacity>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={true}
                />
                <AwesomeAlert
                    show={showErrorAlert}
                    showProgress={false}
                    title="Error"
                    message={`Ocurrio un error\nNo estas registrado o tus datos son erroneos`}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="Aceptar"
                    confirmButtonColor={colors.dangerColor}
                    onConfirmPressed={() => {
                        setShowErrorAlert(false);
                    }}
                />
            </View>
        </View>
    );
}
