import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartButton from './CartButton';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={({ navigation }) => ({
                    headerTitleAlign: 'center',
                    headerTintColor: 'red',
                    headerTitle: () => (
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize:30 }}>InfnetFood</Text>
                    ),

                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Pedidos')}
                                style={{ marginRight: 15 }}
                            >
                                <Text style={{ fontSize: 18 }}>Pedidos |</Text>
                            </TouchableOpacity>

                            <CartButton />

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Perfil')}
                                style={{ marginRight: 15 }}
                            >
                                <Text style={{ fontSize: 18 }}> Perfil 👤 </Text>
                            </TouchableOpacity>



                        </View>
                    ),
                })}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Produtos" component={ProductListScreen} />
                <Stack.Screen name="Detalhes" component={ProductDetailScreen} />
                <Stack.Screen name="Carrinho" component={CartScreen} options={{ title: 'Meu Carrinho' }} />
                <Stack.Screen name="Perfil" component={ProfileScreen} options={{ title: 'Meu Perfil' }} />
                <Stack.Screen name="Pedidos" component={OrdersScreen} options={{ title: 'Meus Pedidos' }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}