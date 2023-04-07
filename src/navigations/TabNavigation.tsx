import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";

import Books from "../screens/Books";
import History from "../screens/History";

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }} >
            <Tab.Screen name="Books" component={Books} />
            <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
    );
}

export default TabNavigation
