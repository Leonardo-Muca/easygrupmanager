import {
    StyleSheet,
} from 'react-native';

import { colors, theme, fonts } from '../../theme/appThem';

export const styles = StyleSheet.create({
    container: {
        height: '45%',
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    containerMenu: {
        borderRadius: 10,
        borderBottomWidth: 0.5,
        height: 70,
        marginHorizontal: 25,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    containerRenderMenu: {
        backgroundColor: colors.white,
        borderRadius: 10,
        bottom: 7,
    },
    homeContainer: {
        backgroundColor: colors.white,
        flex: 1
    },
    name: {
        fontSize: 16,
        textAlign: 'left',
        paddingVertical: 5,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    nameText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        fontStyle: 'italic',
    },
    img: {
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    subTitle: {
        fontSize: 10,
        paddingLeft: 10,
        color: colors.grayLight,
    },
    titleText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        fontStyle: 'italic',
    },
    welcomeText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
});