import {View} from "react-native";
import React from "react";
import {NavigationProp} from "@react-navigation/native";

import CardBook from "../../components/CardBook";

import styles from "./Books.styles";
import {ROUTES} from "../../constants";

interface BooksProps {
    navigation: NavigationProp<any>
}

const BOOKLIST = [
    { author: "Muhammad Sulton", edition: "E234376NH", title: "Rise of Kingdom" },
    { author: "Sulton", edition: "E234376NHKAKJHS", title: "Rise of Kingdom Black Clover Kindom Of The Variveant" },
    { author: "Muhammad Sulton Fatih Alfatihah Alhamdulillah hirobbl alamin", edition: "E2343", title: "Rise of" },
]

const Books: React.FC<BooksProps> = (props) => {
    const onNavigate = React.useCallback((book: any) => () => {
        props.navigation.navigate(ROUTES.BOOK_DETAILS, {
            book
        })
    }, [props.navigation])

    return (
        <View style={styles.container}>
            {
                BOOKLIST.map((book, index) => (
                    <CardBook
                        key={index}
                        title={book.title}
                        author={book.author}
                        edition={book.edition}
                        onPress={onNavigate(book)}
                    />
                ))
            }
        </View>
    );
}

export default Books
