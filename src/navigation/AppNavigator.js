import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import CartButton from './CartButton';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerTintColor: 'red',
                    headerTitle: () => (
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20 }}>InfnetFood</Text>
                    ),
                    headerRight: () => <CartButton />,
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => null }} />

                <Stack.Screen name="Produtos" component={ProductListScreen} />
                <Stack.Screen name="Detalhes" component={ProductDetailScreen} />
                <Stack.Screen name="Carrinho" component={CartScreen} options={{ title: 'Meu Carrinho' }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}