import {useDispatch} from "react-redux";
import {Alert} from "react-native";
import {cleanup, fireEvent, render, screen} from "@testing-library/react-native";

import {book} from "../../fixtures/testData";

import BookDetails from "./BookDetails";

jest
    .mock("../../utils/function", () => ({
        getRandomColor: jest.fn(() => "white")
    }))
    .mock("react-redux")

describe("<BookDetails />", () => {
    const mockBook = {
        ...book,
        coverImg: "image.jpg"
    }
    const mockDate = new Date(2023, 3, 1)
    const mockProps = {
        navigation: {
            goBack: jest.fn()
        },
        route: {
            params: {
                book: mockBook
            }
        }
    }

    afterEach(() => {
        cleanup()
    })

    beforeAll(() => {
        jest.useFakeTimers("modern");
        jest.setSystemTime(mockDate);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it("should render correctly", () => {
        render(<BookDetails {...mockProps} />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    it("should display pickup date modal when button is pressed", async () => {
        render(<BookDetails {...mockProps} />)

        const pickupButton = await screen.findByText("Set Pick-up Date")
        fireEvent.press(pickupButton)

        const bookNowButton = await screen.findByText("Book Now")
        const cancelButton = await screen.findByText("Cancel")

        expect(bookNowButton).toBeTruthy()
        expect(cancelButton).toBeTruthy()
    })

    it("should call onSubmit when book now button is pressed", async () => {
        jest.spyOn(Alert, "alert")
        const mockDispatch = jest.fn()
        useDispatch.mockReturnValue(mockDispatch)

        render(<BookDetails {...mockProps} />)

        const pickupButton = await screen.findByText("Set Pick-up Date")
        fireEvent.press(pickupButton)

        const bookNowButton = await screen.findByText("Book Now")
        fireEvent.press(bookNowButton)

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "books/add",
            payload: {
                ...mockBook,
                pickupDate: mockDate.toLocaleDateString()
            }
        })
        expect(mockProps.navigation.goBack).toHaveBeenCalled()
        expect(Alert.alert).toHaveBeenCalledWith("Hooray", "The book has been successfully booked")
    })
})
