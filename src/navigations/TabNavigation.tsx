import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import Books from "../screens/Books";
import History from "../screens/History";
import {COLORS, ROUTES} from "../constants";
import Icon from "../components/Icon";

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: COLORS.lightGray2,
                }
            }}
        >
            <Tab.Screen
                name={ROUTES.BOOKS}
                component={Books}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => <Icon name={"book-outline"} size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name={ROUTES.HISTORY}
                component={History}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => <Icon name={"time-outline"} size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNavigation
