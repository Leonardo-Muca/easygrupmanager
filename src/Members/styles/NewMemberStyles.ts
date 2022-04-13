import {
    StyleSheet,
} from 'react-native';
import { theme } from '../../theme/appThem';

export const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    containerInputs: {
        flexDirection: 'row',
    },
    buttonSubmit: {
        borderRadius: 5,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        width: '90%',
        height: 40,
        marginTop: 10
    },
    inputEmail: {
        height: 45,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        width: '90%',
        borderRadius: 10,
    },
    input: {
        height: 45,
        margin: 12,
        borderWidth: 0.5,
        padding: 10,
        width: '42%',
        borderRadius: 10,
    },
    experienceInput: {
        borderRadius: 10,
        borderWidth: 0.5,
        height: 100,
        padding: 10,
        width: '90%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    }
});