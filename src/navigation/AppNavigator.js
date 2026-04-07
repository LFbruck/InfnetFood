import React, { useState } from "react";
import { View, Text, TouchableOpacity, useWindowDimensions, Modal, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import CartButton from "./CartButton";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

function HeaderResponsivo({ navigation }) {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;
    const [menuAberto, setMenuAberto] = useState(false);

    if (isMobile) {
        return (
            <View>
                <TouchableOpacity onPress={() => setMenuAberto(true)} style={{ marginRight: 15 }}>
                    <Text style={{ fontSize: 28 }}>☰</Text>
                </TouchableOpacity>

                <Modal visible={menuAberto} transparent={true} animationType="fade">
                    <View style={styles.modalFundo}>
                        <View style={styles.modalConteudo}>
                            <TouchableOpacity style={styles.botaoFechar} onPress={() => setMenuAberto(false)}>
                                <Text style={styles.textoFechar}>X Fechar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.itemMenu} onPress={() => { setMenuAberto(false); navigation.navigate("Pedidos"); }}>
                                <Text style={styles.textoItemMenu}>📋 Meus Pedidos</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.itemMenu} onPress={() => { setMenuAberto(false); navigation.navigate("Perfil"); }}>
                                <Text style={styles.textoItemMenu}>👤 Meu Perfil</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.itemMenu} onPress={() => { setMenuAberto(false); navigation.navigate("Carrinho"); }}>
                                <Text style={styles.textoItemMenu}>🛒 Meu Carrinho</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
    return (
        <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Pedidos")} style={{ marginRight: 15 }}>
                <Text style={{ fontSize: 18 }}>Historico de Pedidos |</Text>
            </TouchableOpacity>
            <CartButton />
            <TouchableOpacity onPress={() => navigation.navigate("Perfil")} style={{ marginRight: 15 }}>
                <Text style={{ fontSize: 24 }}>👤</Text>
            </TouchableOpacity>

        </View>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={({ navigation }) => ({
                    headerTitleAlign: "center",
                    headerTintColor: "red",
                    headerTitle: () => (
                        <Text style={{ color: "red", fontWeight: "bold", fontSize: 37 }}>InfnetFood</Text>
                    ),
                    headerRight: () => <HeaderResponsivo navigation={navigation} />
                })}
            >
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Produtos" component={ProductListScreen} />
                <Stack.Screen name="Detalhes" component={ProductDetailScreen} />
                <Stack.Screen name="Carrinho" component={CartScreen} options={{ title: "Meu Carrinho" }} />
                <Stack.Screen name="Perfil" component={ProfileScreen} options={{ title: "Meu Perfil" }} />
                <Stack.Screen name="Pedidos" component={OrdersScreen} options={{ title: "Meus Pedidos" }} />
                <Stack.Screen name="DetalhesRestaurante" component={RestaurantDetailScreen} options={{ title: "Sobre o Restaurante" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    modalFundo: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        paddingTop: 50,
        paddingRight: 10
    },
    modalConteudo: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        width: 250,
        elevation: 5
    },
    botaoFechar: {
        alignSelf: "flex-end",
        marginBottom: 15
    },
    textoFechar: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16
    },
    itemMenu: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    textoItemMenu: {
        fontSize: 18,
        color: "#333"
    }
});