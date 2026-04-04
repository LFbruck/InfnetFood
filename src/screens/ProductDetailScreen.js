import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {

    const {produto} = route.params;
    const [quantidade, setQuantidade] = useState(1);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{produto.name}</Text>
            <Text style={styles.descricao}>{produto.desc}</Text>
            <Text style={styles.price}>R$ {produto.price.toFixed(2)}</Text>
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={() => quantidade > 1 && setQuantidade(quantidade - 1)} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>{quantidade}</Text>

                <TouchableOpacity onPress={() => setQuantidade(quantidade + 1)} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.cartButton}>
                <Text style={styles.cartButtonText}>Adicionar ao Carrinho (R$ {(produto.price * quantidade).toFixed(2)})</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
        { flex: 1,
        padding: 30,
        alignItems: 'center',
        backgroundColor: '#fff' },
    title:
        { fontSize: 45,
            fontWeight: 'bold',
            color: 'red' },
    descricao:
        { fontSize: 16,
            textAlign: 'center',
            marginVertical: 20,
            color: '#666' },
    price:
        { fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 30 },
    counterContainer:
        { flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 40 },
    button:
        { backgroundColor: 'red', width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
    buttonText:
        { color: 'white', fontSize: 24, fontWeight: 'bold' },
    quantity:
        { fontSize: 24, marginHorizontal: 20, fontWeight: 'bold' },
    cartButton:
        { backgroundColor: 'red', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
    cartButtonText:
        { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});