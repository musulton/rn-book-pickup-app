import {StyleSheet, TextStyle, ViewStyle} from "react-native";

import {COLORS, SIZES} from "../../constants";

interface Styles {
    container: ViewStyle
    scrollContainer: ViewStyle
    headerTitle: TextStyle
    headerWrapper: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: SIZES.padding1
    },
    scrollContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    headerWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray2,
        paddingVertical: SIZES.padding2,
    },
    headerTitle: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default styles
