import {StyleSheet, View, ViewStyle} from "react-native";

import {COLORS} from "../../constants";

interface Styles {
    container: ViewStyle
    emptyState: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: COLORS.background,
    },
    emptyState: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles
