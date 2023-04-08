import {Image, ScrollView, Text, View} from "react-native";
import React from "react";
import {NavigationProp, RouteProp} from "@react-navigation/native";

import Button from "../../components/Button";
import {getRandomColor} from "../../utils/function";

import styles from "./BookDetails.styles";

interface BookDetailsProps {
    navigation: NavigationProp<any>,
    route: RouteProp<any>
}

const BookDetails: React.FC<BookDetailsProps> = (props) => {
    const {route: { params }} = props

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={[styles.imageWrapper, { backgroundColor: getRandomColor() }]}>
                    <Image
                        source={{uri: "https://edit.org/images/cat/book-covers-big-2019101610.jpg"}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.title}>{params?.book?.title}</Text>
                    <Text style={styles.author}>{params?.book?.author}</Text>
                    <Text style={styles.edition}>{params?.book?.edition}</Text>
                </View>
                <Text style={styles.descriptionLabel}>Description</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
            <View style={styles.buttonWrapper}>
                <Button text={"Borrow it"} />
            </View>
        </View>
    );
}

export default BookDetails
