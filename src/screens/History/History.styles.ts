import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.background,
        paddingTop: 20
    },
    scrollContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
    }
});

export default styles
