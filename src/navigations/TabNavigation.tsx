import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import Books from "../screens/Books";
import History from "../screens/History";
import {ROUTES} from "../constants";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }} >
            <Tab.Screen
                name={ROUTES.BOOKS}
                component={Books}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color, size}) => <Icon name={"book-outline"} size={size} color={color} />
                }}
            />
            <Tab.Screen
                name={ROUTES.HISTORY}
                component={History}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({color, size}) => <Icon name={"bookmarks"} size={size} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation
