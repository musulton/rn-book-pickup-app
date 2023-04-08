import {StyleSheet, ViewStyle} from "react-native";

import {COLORS} from "../../constants";

interface Styles {
    container: ViewStyle
    emptyState: ViewStyle
    scrollContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
      backgroundColor: COLORS.background,
        paddingTop: 20
    },
    scrollContainer: {
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
