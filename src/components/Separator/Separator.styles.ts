import {StyleSheet, ViewStyle} from "react-native";

import {COLORS} from "../../constants";

interface Styles {
    separator: ViewStyle
}

const styles = StyleSheet.create<Styles>({
    separator: {
        height: 1,
        backgroundColor: COLORS.lightGray3
    }
})

export default styles
