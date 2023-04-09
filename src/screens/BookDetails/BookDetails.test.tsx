import {useDispatch} from "react-redux";
import {Alert} from "react-native";
import {cleanup, fireEvent, render, screen} from "@testing-library/react-native";

import {book} from "../../fixtures/testData";

import BookDetails from "./BookDetails";

const mockDate = new Date("25-04-1995")
jest
    .mock("../../utils/function", () => ({
        getRandomColor: () => "white",
        getTomorrowDate: () => mockDate
    }))
    .mock("react-redux")

describe("<BookDetails />", () => {
    const mockBook = {
        ...book,
        coverImg: "image.jpg"
    }
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
