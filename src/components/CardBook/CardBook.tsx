import React from "react";
import {TouchableOpacity, Text, Image, View} from "react-native";

import styles from "./CardBook.styles";
import {Book} from "../../types";

interface CardBookProps extends Book {
    onPress?: () => void
    withImage?: boolean
}

const LeftSection: React.FC = () => {
    return (
        <View style={styles.leftSection}>
            <Image
                source={{uri: "https://edit.org/images/cat/book-covers-big-2019101610.jpg"}}
                style={styles.image}
            />
        </View>
    )
}

const RightSection: React.FC<Book> = (props) => {
    return (
        <View style={styles.rightSection}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            <Text style={styles.author} numberOfLines={1}>{props.author}</Text>
            <Text style={styles.edition} numberOfLines={1}>{props.edition}</Text>
            {props.pickupDate && (
                <Text style={styles.pickupDate}>
                    <>Book Date: {props.pickupDate}</>
                </Text>
            )}
        </View>
    )
}

const CardBook: React.FC<CardBookProps> = (props: CardBookProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >
            {props.withImage && <LeftSection />}
            <RightSection {...props} />
        </TouchableOpacity>
    )
}

export default CardBook
