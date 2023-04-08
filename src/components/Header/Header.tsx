import React from "react";
import {Text, TextInput, View} from "react-native";

import styles from "./Header.styles";
import Icon from "../Icon";

const Header = () => {
    const [clicked, setClicked] = React.useState(false);
    const [value, setValue] = React.useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.username}>Hi, Your account name</Text>
            <Text style={styles.title}>Discover Latest Book</Text>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.input}
                    placeholder="Search book.."
                    value={value}
                    onChangeText={setValue}
                    onFocus={() => setClicked(true)}
                    onBlur={() => setClicked(false)}
                />
                {clicked && (
                    <Icon
                        name="close"
                        size={20}
                        onPress={() => setValue("")}
                    />
                )}
            </View>
        </View>
    )
}

export default Header
