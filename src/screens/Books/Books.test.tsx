import renderer from "react-test-renderer";
import {fireEvent, render, screen} from "@testing-library/react-native";

import {ROUTES} from "../../constants";
import {book} from "../../fixtures/testData";

import Books from "./Books";
import useBooksHook from "./useBooksHook";

jest
    .mock("./useBooksHook")
    .mock("../../components/EmptyState", () => "EmptyState")
    .mock("../../components/Header", () => "Header")

describe("<Books />", () => {
    it("should render Books correctly", () => {
        useBooksHook.mockReturnValue({
            getter: {
                data: [book]
            }
        })

        render(<Books />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    it("should render History correctly when empty state", () => {
        useBooksHook.mockReturnValue({
            getter: {
                data: []
            }
        })

        render(<Books />)

        expect(screen.toJSON()).toMatchSnapshot()
    })

    it("should navigate to <BookDetails /> when <CardBook /> is pressed", async () => {
        const mockProps = {
            navigation: {
                navigate: jest.fn()
            }
        }

        useBooksHook.mockReturnValue({
            getter: {
                data: [book]
            }
        })

        render(<Books {...mockProps} />)

        const cardItem = await screen.findByText("title")
        fireEvent.press(cardItem)

        expect(mockProps.navigation.navigate).toHaveBeenCalledWith(ROUTES.BOOK_DETAILS, {
            book: book
        })
    })

    it("should call set current page when scroll to the end of the list", async () => {
        const mockSetCurrentPage = jest.fn()

        useBooksHook.mockReturnValue({
            getter: {
                data: [book]
            },
            setter: {
                currentPage: mockSetCurrentPage
            }
        })

        render(<Books />)

        const bookList = await screen.findByTestId("bookList")

        fireEvent.scroll(bookList, {
            nativeEvent: {
                contentOffset: {
                    y: 500,
                },
                contentSize: {
                    height: 500,
                    width: 100,
                },
                layoutMeasurement: {
                    height: 100,
                    width: 100,
                },
            }
        })

        expect(mockSetCurrentPage).toHaveBeenCalledWith(expect.any(Function))
    })
})
