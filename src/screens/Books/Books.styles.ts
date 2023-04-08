import {StyleSheet, ViewStyle} from "react-native";

import {COLORS} from "../../constants";

interface Styles {
    container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
});

export default styles
