import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "flex-start",
        padding: 20,
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
        marginLeft: 10,
        width: "90%",
    },
    searchBar: {
        marginTop: 10,
        padding: 10,
        flexDirection: "row",
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.borderRadius,
        alignItems: "center",
    }
})


export default styles
