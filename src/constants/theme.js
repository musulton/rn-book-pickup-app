import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#039BE5",
    secondary: "#25282F",

    // colors
    black: "#1E1B26",
    white: "#FFFFFF",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",

};

export const SIZES = {
    padding1: 20,
    padding2: 10,
    borderRadius: 10,

    // app dimensions
    width,
    height
};

const appTheme = { COLORS, SIZES };

export default appTheme;
