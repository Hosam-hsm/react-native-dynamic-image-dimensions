import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens';

const Stack = createStackNavigator();

function DynamicImageNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="DynamicImageHome" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default DynamicImageNavigator;