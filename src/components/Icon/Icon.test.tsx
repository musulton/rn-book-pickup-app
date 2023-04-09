import Ionicons from "@expo/vector-icons/Ionicons";
import {render, screen} from "@testing-library/react-native";

import Icon from "./Icon";

describe("<Icon />", () => {
    it("should render correctly", () => {
        const props = {
            name: "close" as keyof typeof Ionicons.glyphMap,
            color: "white",
            size: 30,
            onPress: jest.fn()
        }

        render(<Icon {...props} />)

        expect(screen.toJSON()).toMatchSnapshot();
    })
});
