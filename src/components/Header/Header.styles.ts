import {StyleSheet, TextStyle, ViewStyle} from "react-native";

import {COLORS, SIZES} from "../../constants";

interface Styles {
    container: ViewStyle
    username: TextStyle
    title: TextStyle
    input: TextStyle
    searchBar: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        padding: SIZES.padding1,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray2,
    },
    username: {
        color: COLORS.lightGray
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        fontSize: 20,
        marginLeft: SIZES.padding2,
        width: "90%",
    },
    searchBar: {
        marginTop: SIZES.padding2,
        padding: SIZES.padding2,
        flexDirection: "row",
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.borderRadius,
        alignItems: "center",
    }
})


export default styles
