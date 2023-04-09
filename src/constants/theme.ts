import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#039BE5",
    background: "#FEFEFE",

    black: "#1E1B26",
    white: "#FFFFFF",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
};

export const SIZES = {
    padding1: 20,
    padding2: 10,
    borderRadius: 6,

    // app dimensions
    width,
    height
};

const appTheme = { COLORS, SIZES };

export default appTheme;
