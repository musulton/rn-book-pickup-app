import {FlatList, ListRenderItemInfo, View} from "react-native";
import React from "react";
import {NavigationProp} from "@react-navigation/native";

import CardBook from "../../components/CardBook";
import {ROUTES} from "../../constants";
import {Book} from "../../types";

import styles from "./Books.styles";
import useBooksHook from "./useBooksHook";

interface BooksProps {
    navigation: NavigationProp<any>
}

const Books: React.FC<BooksProps> = (props) => {
    const { getter, setter } = useBooksHook();

    const onNavigate = React.useCallback((book: Book) => () => {
        props.navigation.navigate(ROUTES.BOOK_DETAILS, {
            book
        })
    }, [props.navigation])

    return (
        <View style={styles.container}>
            <FlatList
                data={getter?.data}
                renderItem={(props: ListRenderItemInfo<Book>) => (
                    <CardBook
                        {...props.item}
                        onPress={onNavigate(props.item)}
                    />
                )}
            />
        </View>
    );
}

export default Books
