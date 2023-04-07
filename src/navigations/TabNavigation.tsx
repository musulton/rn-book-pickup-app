import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import Books from "../screens/Books";
import History from "../screens/History";
import {ROUTES} from "../constants";

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }} >
            <Tab.Screen name={ROUTES.BOOKS} component={Books} />
            <Tab.Screen name={ROUTES.HISTORY} component={History} />
        </Tab.Navigator>
    );
}

export default TabNavigation
