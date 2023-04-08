import Ionicons from "@expo/vector-icons/Ionicons";

import {COLORS} from "../../constants";
import React from "react";

interface IconProps {
    name: keyof typeof Ionicons.glyphMap
    size: number
    color: string
}

const Icon: React.FC<IconProps> = (props) => {
    return (
        <Ionicons name={props.name} size={props.size} color={props.color} />
    )
}

export default Icon
