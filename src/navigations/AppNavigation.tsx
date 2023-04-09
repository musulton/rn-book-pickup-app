import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

import TabNavigation from "./TabNavigation";
import BookDetails from "../screens/BookDetails";
import {ROUTES} from "../constants";

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
            <Stack.Navigator
                initialRouteName={ROUTES.HOME}
            >
                <Stack.Screen
                    name={ROUTES.HOME}
                    component={TabNavigation}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name={ROUTES.BOOK_DETAILS}
                    component={BookDetails}
                    options={{
                        title: "Book Details"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation
