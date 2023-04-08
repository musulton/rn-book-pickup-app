import {Text, View} from "react-native";
import React from "react";

import styles from "./EmptyState.styles";

interface EmptyStateProps {
    text?: string
}

const EmptyState: React.FC<EmptyStateProps> = (props) => (
    <View style={styles.emptyState}>
        <Text>{props.text || "Data is nof found"}</Text>
    </View>
)

export default EmptyState
