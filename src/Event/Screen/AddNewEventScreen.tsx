import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { colors } from '../../theme/appThem';
import { styles } from '../styles/AddNewEventsStyles';
import AwesomeAlert from 'react-native-awesome-alerts';

export const AddNewEventScreen = () => {
    const [couplesNumber, setCouplesNumber] = useState(null);
    const [date, setDate] = useState(null);
    const [annotations, setAnnotations] = useState(null);
    const [name, setName] = useState(null);
    const [place, setPlace] = useState(null);
    const [price, setPrice] = useState(null);
    const [time, setTime] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState<boolean>(false);
    const [showSuccesAlert, setShowSuccesAlert] = useState<boolean>(false);

    const accesLogin = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                couplesNumber, date, name, annotations, place,
                price, time
            })
        };
        fetch('https://equipo4-4c-2do-parcial-awos.herokuapp.com/api/event', requestOptions)
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
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setName}
                    value={name}
                    placeholder="Nombre del Evento"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setPlace}
                    value={place}
                    placeholderTextColor={colors.black}
                    placeholder="Lugar del Evento"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.inputEmail}
                    onChangeText={setCouplesNumber}
                    value={couplesNumber}
                    placeholderTextColor={colors.black}
                    placeholder="Numero de Parejas"
                    keyboardType="email-address"
                />
                <View style={styles.containerInputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPrice}
                        value={price}
                        placeholder="Precio"
                        placeholderTextColor={colors.black}
                        keyboardType='number-pad'
                    />
                    <DatePicker
                        style={{ width: '48%' }}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2022-03-22"
                        maxDate="2022-12-31"
                        confirmBtnText="Aceptar"
                        cancelBtnText="Cancelar"
                        customStyles={{
                            dateIcon: styles.dateIcon,
                            dateInput: styles.dateInput
                        }}
                        onDateChange={setDate}
                    />
                </View>
                <View style={styles.containerInputs}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTime}
                        value={time}
                        placeholder="Hora"
                        placeholderTextColor={colors.black}
                        keyboardType='number-pad'
                    />
                </View>
                <TextInput
                    style={styles.experienceInput}
                    onChangeText={setAnnotations}
                    value={annotations}
                    placeholder="Anotaciones"
                    placeholderTextColor={colors.black}
                    keyboardType="email-address"
                />
                <TouchableOpacity
                    style={styles.buttonSubmit}
                    onPress={accesLogin}>
                    <Text>Agregar evento</Text>
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
                    message="Se agrego el evento con exito"
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
        </ScrollView>
    );
}
