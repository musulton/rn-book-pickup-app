import {FlatList, ListRenderItemInfo, View} from "react-native";
import React from "react";
import {useSelector} from "react-redux";

import {Book} from "../../types";
import CardBook from "../../components/CardBook";

import styles from "./History.styles";

const History: React.FC = () => {
    const books = useSelector((state: any) => state?.books?.books)

    return (
        <FlatList
            data={books}
            renderItem={(props: ListRenderItemInfo<Book>) => (
                <CardBook {...props.item} withImage={false} />
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            style={styles.container}
        />
    );
}

export default History
