import {
    StatusBar,
    StyleSheet,
} from 'react-native';
import { colors, theme } from '../../theme/appThem';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 20,
        borderWidth: 2,
        height: 165,
        marginHorizontal: 10,
        marginVertical: 15,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        alignItems: 'center',
        elevation: 9,
        justifyContent: 'center',
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    containerImage: {
        paddingBottom: 85,
        position: 'absolute'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    information: {
        justifyContent: "center",
        flexDirection: "row",
    },
    img: {
        borderColor: colors.black,
        borderRadius: 50,
        borderWidth: 2,
        height: 100,
        justifyContent: 'center',
        width: 100,
    },
    name: {
        fontSize: 16,
        paddingLeft: 5,
        textAlign: 'center',
    },
    textTitle:{
        fontSize: 30,
        color: theme.colors.primary,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 32,
    },
});