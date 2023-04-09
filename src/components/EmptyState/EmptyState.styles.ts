import {StyleSheet, ViewStyle} from "react-native";

interface Styles {
    emptyState: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    emptyState: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles
