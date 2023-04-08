import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TabNavigation from "./TabNavigation";
import BookDetails from "../screens/BookDetails";
import {COLORS, ROUTES} from "../constants";
import Header from "../components/Header";
import {Text, View} from "react-native";

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
                        header: () => null
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
