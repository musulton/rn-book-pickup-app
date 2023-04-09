import React from "react";
import {Text, TouchableOpacity} from "react-native";

import styles from "./Button.styles";

interface ButtonProps {
    text: string
    onPress: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button
