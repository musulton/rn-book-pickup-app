import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

import TabNavigation from "./TabNavigation";
import BookDetails from "../screens/BookDetails";

const Stack = createNativeStackNavigator();

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const AppNavigation: React.FC = () => {
    return (
        <NavigationContainer theme={Theme}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={TabNavigation} />
                <Stack.Screen name="BookDetails" component={BookDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
