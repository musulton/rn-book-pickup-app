import {ActivityIndicator, FlatList, ListRenderItemInfo, Text, View} from "react-native";
import React from "react";
import {NavigationProp} from "@react-navigation/native";

import CardBook from "../../components/CardBook";
import {COLORS, ROUTES} from "../../constants";
import {Book} from "../../types";

import styles from "./Books.styles";
import useBooksHook from "./useBooksHook";

interface BooksProps {
    navigation: NavigationProp<any>
}

const EmptyState: React.FC = () => (
    <View style={styles.emptyState}>
        <Text>Data is nof found</Text>
    </View>
)

const Books: React.FC<BooksProps> = (props) => {
    const { getter, setter } = useBooksHook();
    const hasData = getter?.data?.length > 0

    const onNavigate = React.useCallback((book: Book) => () => {
        props.navigation.navigate(ROUTES.BOOK_DETAILS, {
            book
        })
    }, [])

    const onEndReached = () => {
        setter.currentPage((currentPage: number) => currentPage + 1)
    }

    return (
        <FlatList
            data={getter?.data}
            renderItem={(props: ListRenderItemInfo<Book>) => (
                <CardBook
                    title={props.item.title}
                    author={props.item.author}
                    edition={props.item.edition}
                    onPress={onNavigate(props.item)}
                    withImage={true}
                />
            )}
            onEndReached={onEndReached}
            refreshing={getter.loading}
            contentContainerStyle={!hasData && styles.container}
            ListEmptyComponent={<EmptyState />}
            ListFooterComponent={hasData ? <ActivityIndicator size={"small"} /> : null}
            initialNumToRender={10}
        />
    )
}

export default Books
