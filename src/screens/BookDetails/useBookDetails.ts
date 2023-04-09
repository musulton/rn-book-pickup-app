import React from "react";

interface UseBookDetails {
    getter: {
        selectedDate: Date
        datePickerVisible: boolean
    }
    setter: {
        selectedDate: (date: Date) => void
        datePickerVisible: (visibility: boolean) => void
    }
}

const useBookDetails: () => UseBookDetails = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = React.useState(false);

    return {
        getter: { selectedDate, datePickerVisible },
        setter: { selectedDate: setSelectedDate, datePickerVisible: setDatePickerVisible }
    }
}

export default useBookDetails
