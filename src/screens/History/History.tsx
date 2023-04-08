import {FlatList, ListRenderItemInfo, SafeAreaView, Text, View} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

import {Book} from "../../types";
import CardBook from "../../components/CardBook";
import Separator from "../../components/Separator";

import styles from "./History.styles";
import EmptyState from "../../components/EmptyState";

const History: React.FC = () => {
    const books = useSelector((state: any) => state?.books?.books)

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>List of books borrowed</Text>
            <FlatList
                data={books}
                renderItem={(props: ListRenderItemInfo<Book>) => (
                    <CardBook {...props.item} withImage={true} />
                )}
                ItemSeparatorComponent={Separator}
                contentContainerStyle={books.length < 1 && styles.scrollContainer}
                ListEmptyComponent={<EmptyState text={"You haven't picked up any books yet"} />}
            />
        </SafeAreaView>
    );
}

export default History
