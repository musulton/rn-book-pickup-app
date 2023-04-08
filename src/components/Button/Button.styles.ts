import {StyleSheet, TextStyle, ViewStyle} from "react-native";

import {COLORS, SIZES} from "../../constants";

interface Styles {
    container: ViewStyle
    text: TextStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.borderRadius
    },
    text: {
        padding: SIZES.padding1,
        fontWeight: "500",
        fontSize: 16,
        color: COLORS.white
    }
})

export default styles
