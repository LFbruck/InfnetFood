import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Text } from 'react-native';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Products"
                    component={ProductListScreen}
                    options={{
                        headerTitle: () => (
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 30 }}>InfnetFood</Text>
                        ),
                        headerTitleAlign: 'center',
                        headerTintColor: 'red',
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={ProductDetailScreen}
                    options={{
                        headerTitle: () => (
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 30 }}>InfnetFood</Text>
                        ),
                        headerTitleAlign: 'center',
                        headerTintColor: 'red',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}