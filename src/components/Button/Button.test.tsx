import {render, screen} from "@testing-library/react-native";

import Button from "./Button";

describe("<Button />", () => {
    it("should render Button correctly", () => {
        const props = {
            text: "Test",
            onPress: jest.fn(),
        }

        render(<Button {...props} />)

        expect(screen.toJSON()).toMatchSnapshot();
    })
});
