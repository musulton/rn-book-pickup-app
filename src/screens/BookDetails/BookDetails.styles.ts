import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {COLORS, SIZES} from "../../constants";

interface Styles {
    container: ViewStyle
    imageWrapper: ViewStyle
    scrollContainer: ViewStyle
    image: ImageStyle
    textWrapper: TextStyle
    title: TextStyle
    author: TextStyle
    edition: TextStyle
    description: TextStyle
    buttonWrapper: ViewStyle
    descriptionLabel: TextStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.background,
        height: "100%"
    },
    scrollContainer: {
    },
    imageWrapper: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    image: {
        width: 150,
        height: 200,
        resizeMode: "stretch",
        borderRadius: SIZES.borderRadius
    },
    textWrapper: {
        margin: SIZES.padding1
    },
    title: {
        fontSize: 22,
        fontWeight: "500"
    },
    author: {
        fontSize: 14,
        color: COLORS.lightGray,
        marginVertical: 5
    },
    edition: {
        fontSize: 18,
        fontWeight: "500"
    },
    descriptionLabel: {
        fontSize: 14,
        lineHeight: 20,
        paddingHorizontal: SIZES.padding1,
        fontWeight: "bold"
    },
    description: {
        fontSize: 14,
        color: COLORS.lightGray,
        lineHeight: 20,
        paddingHorizontal: SIZES.padding1
    },
    buttonWrapper: {
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
});

export default styles
