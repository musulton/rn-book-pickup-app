import React from "react";
import {render, screen} from "@testing-library/react-native";
import {NavigationContainer} from "@react-navigation/native";

import TabNavigation from "./TabNavigation";

describe("<TabNavigation />", () => {
    it("renders the correct <Books /> screen as initial screen", async () => {
        const component = (
            <NavigationContainer>
                <TabNavigation />
            </NavigationContainer>
        )

        render(component)

        const header = await screen.findByText("Discover Latest Book")
        expect(header).toBeTruthy()
    })
})
