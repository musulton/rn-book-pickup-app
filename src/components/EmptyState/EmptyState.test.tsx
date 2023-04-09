import {render, screen} from "@testing-library/react-native";

import EmptyState from "./EmptyState";

describe("<EmptyState />", () => {
    it("should render correctly with props", () => {
        const props = {
            text: "Test",
        }

        render(<EmptyState {...props} />)

        expect(screen.toJSON()).toMatchSnapshot();
    })

    it("should render correctly without props", () => {
        render(<EmptyState />)

        expect(screen.toJSON()).toMatchSnapshot();
    })
});
