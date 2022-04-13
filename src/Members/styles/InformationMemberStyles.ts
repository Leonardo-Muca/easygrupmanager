import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInformation: {
        alignItems: 'center',
        paddingTop: 10,
    },
    containerImage: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    information: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 15,
    },
    line: {
        backgroundColor: 'red',
        height: 1,
        paddingHorizontal: 5,
        width: 200,
    },
    img: {
        alignContent: 'center',
        alignItems: 'center',
        height: 200,
        justifyContent: 'center',
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 17,
    }
});