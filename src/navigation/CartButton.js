import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../context/CartContext';

export default function CartButton() {
    const navigation = useNavigation();
    const { cart } = useCart();


    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Carrinho')}
        >
            <Text style={styles.icon}>Meu Carrinho | </Text>
            {itemCount > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{itemCount}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { marginRight: 15, flexDirection: 'row' },
    icon: { fontSize: 18 },
    badge: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'black',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' }
});