import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

interface IconProps {
    name: keyof typeof Ionicons.glyphMap
    size: number
    color?: string
    onPress?: () => void
}

const Icon: React.FC<IconProps> = (props) => {
    return (
        <Ionicons
            name={props.name}
            size={props.size}
            color={props.color}
            onPress={props.onPress}
        />
    )
}

export default Icon
