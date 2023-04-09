import React from "react";

import {getTomorrowDate} from "../../utils/function";

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
    const [selectedDate, setSelectedDate] = React.useState(getTomorrowDate());
    const [datePickerVisible, setDatePickerVisible] = React.useState(false);

    return {
        getter: { selectedDate, datePickerVisible },
        setter: { selectedDate: setSelectedDate, datePickerVisible: setDatePickerVisible }
    }
}

export default useBookDetails
