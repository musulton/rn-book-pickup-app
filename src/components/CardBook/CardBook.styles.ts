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
    pickupDate: TextStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.padding2,
        marginVertical: SIZES.padding2
    },
    leftSection: {
        marginRight: 5,
        resizeMode: "stretch",
    },
    rightSection: {
        flex: 1,
        display: "flex",
        marginLeft: SIZES.padding2,
        alignContent: "center",
        justifyContent: "center"
    },
    image: {
        height: 100,
        width: 70,
        borderRadius: SIZES.borderRadius,
        resizeMode: "cover"
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
    },
    pickupDate: {
        fontSize: 16,
        marginTop: 5,
    }
})

export default styles
