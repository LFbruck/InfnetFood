import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const PRODUTOS_MOCK = [
    { id: '101', categoryId: 1, name: 'X-Burger Clássico', price: 25.90, desc: 'Hambúrguer artesanal 180g, queijo cheddar e maionese da casa.' },
    { id: '102', categoryId: 1, name: 'X-Bacon Infnet', price: 32.00, desc: 'Hambúrguer 180g, muito bacon crocante, queijo e alface.' },
    { id: '201', categoryId: 2, name: 'Pizza Calabresa', price: 45.00, desc: 'Molho de tomate, mussarela, calabresa fatiada e cebola.' },
    { id: '202', categoryId: 2, name: 'Pizza Margherita', price: 48.00, desc: 'Mussarela, manjericão fresco e fatias de tomate selecionados.' },
    { id: '301', categoryId: 3, name: 'Feijoada Completa', price: 42.90, desc: 'Acompanha arroz branco, farofa, couve e laranja.' },
    { id: '302', categoryId: 3, name: 'Frango a Parmegiana', price: 38.50, desc: 'Filé de frango empanado com molho de tomate e mussarela.' },
    { id: '401', categoryId: 4, name: 'Salada Caesar', price: 28.00, desc: 'Alface romana, croutons, queijo parmesão e molho caesar.' },
    { id: '402', categoryId: 4, name: 'Salada Grega', price: 26.50, desc: 'Tomate, pepino, cebola roxa, azeitonas e queijo feta.' },
    { id: '501', categoryId: 5, name: 'Combinado 15 Peças', price: 55.00, desc: 'Variedade de sushis e sashimis frescos do dia.' },
    { id: '502', categoryId: 5, name: 'Temaki Salmão', price: 22.00, desc: 'Cone de alga com arroz e cubos de salmão com cream cheese.' },
    { id: '601', categoryId: 6, name: 'Coca-Cola Lata', price: 6.50, desc: 'Refrigerante 350ml bem gelado.' },
    { id: '602', categoryId: 6, name: 'Suco de Laranja', price: 9.00, desc: 'Suco natural da fruta 400ml.' },
    { id: '701', categoryId: 7, name: 'Petit Gâteau', price: 18.90, desc: 'Bolo de chocolate quente com recheio cremoso e sorvete.' },
    { id: '702', categoryId: 7, name: 'Pudim de Leite', price: 12.00, desc: 'Fatia generosa de pudim caseiro com calda de caramelo.' },
    { id: '801', categoryId: 8, name: 'Picanha Grelhada', price: 65.00, desc: 'Corte nobre de picanha (300g) com batatas rústicas.' },
    { id: '802', categoryId: 8, name: 'Filé ao Molho Madeira', price: 58.00, desc: 'Medalhão de filé mignon com molho madeira clássico e champignon.' },
];

export default function ProductListScreen({ navigation, route }) {
    const { categoryId } = route.params;
    const produtosFiltrados = PRODUTOS_MOCK.filter(p => p.categoryId === categoryId);

    return (
        <View style={styles.container}>
            <FlatList
                data={produtosFiltrados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.productCard}
                        onPress={() => navigation.navigate('Detalhes', { produto: item })}
                    >
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}> R$ {item.price.toFixed(2)}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    productCard: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
    productName: { fontSize: 18, fontWeight: 'bold' },
    productPrice: { color: 'red', fontWeight: 'bold', marginTop: 5 }
});