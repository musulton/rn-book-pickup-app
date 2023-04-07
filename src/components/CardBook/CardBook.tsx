import React from "react";
import {TouchableOpacity, Text, Image, View} from "react-native";

import styles from "./CardBook.styles";

interface BookProps {
    title: string
    author: string
    edition: string
}

interface CardBookProps extends BookProps {
    onPress: () => void
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

const RightSection: React.FC<BookProps> = (props: BookProps) => {
    return (
        <View style={styles.rightSection}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            <Text style={styles.author} numberOfLines={1}>{props.author}</Text>
            <Text style={styles.edition} numberOfLines={1}>{props.edition}</Text>
        </View>
    )
}

const CardBook: React.FC<CardBookProps> = (props: CardBookProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={props.onPress}
        >
            <LeftSection />
            <RightSection {...props} />
        </TouchableOpacity>
    )
}

export default CardBook
