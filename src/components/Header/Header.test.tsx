import {fireEvent, render, screen, waitFor} from "@testing-library/react-native";

import Header from "./Header";

describe("<Header />", () => {
    it("should render correctly", () => {
        render(<Header />)

        expect(screen.toJSON()).toMatchSnapshot();
    })

    it("should render correctly when <SearchBook /> is filled", async () => {
        const expectedValue = "book title"

        render(<Header />)

        const searchInput = await screen.findByPlaceholderText("Search book..")

        fireEvent.press(searchInput)
        fireEvent.changeText(searchInput, expectedValue)

        await waitFor(() => {
            expect(screen.toJSON()).toMatchSnapshot()
        })
    })
});
