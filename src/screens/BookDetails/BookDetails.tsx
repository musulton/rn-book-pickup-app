import {Image, ScrollView, Text, View, Alert} from "react-native";
import React from "react";
import {NavigationProp, RouteProp} from "@react-navigation/native";
import DateTimePicker from "react-native-modal-datetime-picker";
import {useDispatch} from "react-redux";

import Button from "../../components/Button";
import {getRandomColor} from "../../utils/function";
import {COLORS} from "../../constants";
import {Book} from "../../types";
import {add} from "../../store/slices/bookSlice";

import styles from "./BookDetails.styles";

interface BookDetailsProps {
    navigation: NavigationProp<any>,
    route: RouteProp<any>
}

interface SubmitBookProps {
    onSubmit: (date: Date) => void
}

const SubmitBook: React.FC<SubmitBookProps> = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        hideDatePicker();
        props.onSubmit(date);
    };

    return (
        <View style={styles.buttonWrapper}>
            <Button text={"Set Pick-up Date"} onPress={showDatePicker} />
            <DateTimePicker
                date={selectedDate}
                isVisible={datePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                textColor={COLORS.black}
                confirmTextIOS={"Book Now"}
                minimumDate={new Date()}
            />
        </View>
    );
}

const BookInfo = React.memo((props: Book): JSX.Element => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.imageWrapper, { backgroundColor: getRandomColor() }]}>
            <Image
                source={{uri: props.coverImg}}
                style={styles.image}
            />
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.title}>{props?.title}</Text>
            <Text style={styles.author}>{props?.author}</Text>
            <Text style={styles.edition}>{props?.edition}</Text>
        </View>
        <Text style={styles.descriptionLabel}>Description</Text>
        <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
    </ScrollView>
))

const BookDetails: React.FC<BookDetailsProps> = (props) => {
    const dispatch = useDispatch();

    const {route: { params }} = props
    const {title, author, edition, coverImg} = params?.book

    const onSubmit = (date: Date) => {
        dispatch(add({
            ...params?.book,
            pickupDate: new Date(date).toLocaleDateString()
        }))
        props.navigation.goBack()

        Alert.alert('Hooray', 'The book has been successfully booked');
    }


    return (
        <View style={styles.container}>
            <BookInfo title={title} author={author} edition={edition} coverImg={coverImg} />
            <SubmitBook onSubmit={onSubmit} />
        </View>
    );
}

export default BookDetails
