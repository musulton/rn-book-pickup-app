import {fireEvent, render, screen} from "@testing-library/react-native";

import {book} from "../../fixtures/testData";
import CardBook from "./CardBook";

describe("<CardBook />", () => {
    const mockProps = {
        onPress: jest.fn(),
        ...book,
        coverImg: "google.com"
    }

    it("should render <CardBook /> correctly", () => {
        const props = {...mockProps}
        render(<CardBook {...props} />)

        expect(screen.toJSON()).toMatchSnapshot();
    })

    it("should render <CardBook /> correctly with pickupDate", () => {
        const props = {
            ...mockProps,
            pickupDate: "12 Mei 2023"
        }

        render(<CardBook {...props} />)

        expect(screen.toJSON()).toMatchSnapshot();
    })

    it("should call props onPress when <CardBook/> is clicked", () => {
        const props = {...mockProps}
        const {getByText} = render(<CardBook {...props} />)

        fireEvent.press(getByText("title"))
        expect(props.onPress).toHaveBeenCalled()
    })
});
