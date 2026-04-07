import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";

export default function CartScreen({ navigation }) {
    const { cart, totalValue, removerFromCart } = useCart();

    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetail}>
                    {item.quantity}x - R$ {(item.price * item.quantity).toFixed(2)}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.removerButton}
                onPress={() => removerFromCart(item.id)}
            >
                <Text style={styles.removerText}>Remover Item</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Pedido:</Text>

            {cart.length === 0 ? (
                <Text style={styles.empty}>Carrinho vazio...</Text>
            ) : (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                        contentContainerStyle={styles.listContainer}
                    />

                    <View style={styles.footer}>
                        <Text style={styles.total}>Total: R$ {totalValue.toFixed(2)}</Text>
                        <TouchableOpacity
                            style={styles.finalizarBtn}
                            onPress={() => navigation.navigate("Checkout")}
                        >
                            <Text style={styles.finalizarText}>Ir para Pagamento</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "red",
        marginBottom: 20
    },
    empty: {
        textAlign: "center",
        marginTop: 50,
        fontSize: 22,
        color: "#999"
    },
    listContainer: {
        paddingBottom: 20
    },
    cartItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee"
    },
    itemInfo: {
        flex: 1
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold"
    },
    itemDetail: {
        color: "#666",
        marginTop: 5
    },
    removerButton: {
        padding: 10,
        borderRadius: 8,
        marginLeft: 10
    },
    removerText: {
        fontSize: 16,
        color: "red"
    },
    footer: {
        marginTop: 10,
        paddingTop: 20,
        borderTopWidth: 2,
        borderTopColor: "#eee",
        backgroundColor: "#fff"
    },
    total: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "right",
        marginBottom: 15
    },
    finalizarBtn: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    finalizarText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
});