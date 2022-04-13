import {
    StyleSheet,
} from 'react-native';
import { colors, theme } from '../../theme/appThem';

export const styles = StyleSheet.create({
    buttonLogin: {
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        justifyContent: 'center',
        width: 200,
        height: 40,
        marginTop: 20,
    },
    container: {
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
        flex: 100,
        backgroundColor: 'white',
    },
    containerInputs: {
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        flex: 1,
        paddingTop: 20,
        width: '100%',
    },
    desigText: {
        paddingTop: 10,
        fontWeight: 'bold',
    },
    input: {
        height: 45,
        margin: 12,
        borderBottomWidth: 0.5,
        padding: 10,
        width: 350,
        borderColor: colors.white,
        color: colors.white,
    },
    textLoginButton: {
        color: colors.black
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});