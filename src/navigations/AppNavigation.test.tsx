import React from "react";
import {render, screen} from "@testing-library/react-native";

import AppNavigation from "./AppNavigation";

describe("<AppNavigation />", () => {
    it("renders <AppNavigation /> correctly", () => {
        render(<AppNavigation />)

        expect(screen.toJSON()).toMatchSnapshot()
    })
})
