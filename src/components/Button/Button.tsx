import React from "react";
import {Text, TouchableOpacity} from "react-native";

import styles from "./Button.styles";

interface ButtonProps {
    text: string
    onPress: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <TouchableOpacity style={styles.container} disabled={props.disabled} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button
