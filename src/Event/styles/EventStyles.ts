import {
    StyleSheet,
} from 'react-native';

import { colors, theme, fonts } from '../../theme/appThem';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    textTitle: {
        fontSize: 30,
        color: theme.colors.primary,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});