import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PEDIDOS_MOCK = [
    {
        id: '1',
        data: 'Hoje',
        itens: '2x X-Burger, 1x Coca-Cola',
        total: 58.30,
        status: 'Preparando... 👨‍🍳'
    },
    {
        id: '2',
        data: '02/04/2026',
        itens: '1x Pizza Calabresa',
        total: 45.00,
        status: 'Entregue ✅'
    },
    {
        id: '3',
        data: '04/04/2026',
        itens: '1x Picanha Grelhada',
        total: 65.00,
        status: 'Entregue ✅'
    },
];

export default function OrdersScreen() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.headerCard}>
                <Text style={styles.data}>{item.data}</Text>
                <Text style={styles.status}>{item.status}</Text>
            </View>
            <Text style={styles.itens}>{item.itens}</Text>
            <Text style={styles.total}>Total do pdido: R$ {item.total.toFixed(2)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historico de Pedidos</Text>
            <FlatList
                data={PEDIDOS_MOCK}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'red',
        marginBottom: 20
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderRadius: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#eee',
        elevation: 2,
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    data: {
        color: '#666',
        fontWeight: 'bold'
    },
    status: {
        color: 'red',
        fontWeight: 'bold'
    },
    itens: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
});
