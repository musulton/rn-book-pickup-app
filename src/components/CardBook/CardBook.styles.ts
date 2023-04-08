import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";

import {COLORS, SIZES} from "../../constants";

interface Styles {
    container: ViewStyle
    leftSection: ViewStyle
    rightSection: ViewStyle
    image: ImageStyle
    title: TextStyle
    author: TextStyle
    edition: TextStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.padding2
    },
    leftSection: {
        flex: 1,
        marginRight: 5,
        resizeMode: "stretch",
    },
    rightSection: {
        flex: 3,
        display: "flex",
        marginLeft: 10,
        alignContent: "center",
        justifyContent: "center"
    },
    image: {
        height: 100,
        resizeMode: "stretch",
        borderRadius: SIZES.borderRadius,
    },
    title: {
        fontSize: 18,
        fontWeight: "500"
    },
    author: {
        color: COLORS.lightGray,
        marginVertical: 5
    },
    edition: {
        fontSize: 16,
        fontWeight: "500"
    }
})

export default styles
