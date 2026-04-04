import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
    const { cart, totalValue } = useCart();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Pedido 🛒</Text>

            {cart.length === 0 ? (
                <Text style={styles.empty}>Carrinho vazio...</Text>
            ) : (
                <>
                    <FlatList
                        data={cart}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text>{item.quantity}x - R$ {(item.price * item.quantity).toFixed(2)}</Text>
                            </View>
                        )}
                    />
                    <View style={styles.footer}>
                        <Text style={styles.total}>Total: R$ {totalValue.toFixed(2)}</Text>
                    </View>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    title: { fontSize: 40, fontWeight: 'bold', color: 'red', marginBottom: 20 },
    empty: { textAlign: 'center', marginTop: 50, fontSize: 18, color: '#999' },
    item: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
    itemName: { fontSize: 18, fontWeight: 'bold' },
    footer: { marginTop: 20, paddingTop: 20, borderTopWidth: 2, borderTopColor: '#eee' },
    total: { fontSize: 22, fontWeight: 'bold', textAlign: 'right' }
});