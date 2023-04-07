import {Button, Text, View} from "react-native";
import React from "react";
import {NavigationProp} from "@react-navigation/native";

import styles from "./Books.styles";

interface BooksProps {
    navigation: NavigationProp<any>
}

const Books: React.FC<BooksProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Books screen</Text>
            <Button title={"Navigate to detail"} onPress={() => props.navigation.navigate("BookDetails")} />
        </View>
    );
}

export default Books
