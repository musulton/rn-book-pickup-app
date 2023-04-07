import {Text, View} from "react-native";
import React from "react";

import styles from "./BookDetails.styles";
import {NavigationProp, RouteProp} from "@react-navigation/native";

interface BookDetailsProps {
    navigation: NavigationProp<any>,
    route: RouteProp<any>
}

const BookDetails: React.FC<BookDetailsProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Book detail screen</Text>
        </View>
    );
}

export default BookDetails
