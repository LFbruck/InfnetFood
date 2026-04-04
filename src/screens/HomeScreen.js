import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput} from 'react-native';


const CATEGORIAS = [
    {id: 1, title: "Lanches 🍔"},
    {id: 2, title: "Pizzas 🍕"},
    {id: 3, title: "Pratos Prontos 🍽️"},
    {id: 4, title: "Saladas 🥗"},
    {id: 5, title: "Japonês 🍣"},
    {id: 6, title: "Bebidas 🥤"},
    {id: 7, title: "Sobremesas 🍰"},
    {id: 8, title: "Carnes 🥩"},
]


export default function HomeScreen({navigation}) {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Products', { categoryId: item.id, categoryTitle: item.title })}>
            <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
    );


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao InfnetFood!🍔 </Text>
            <Text style={styles.headerTitle}>Categorias:</Text>
            <Text style={styles.headerSubtitle}>Qual sua escolha pra hoje?</Text>


            <FlatList
                data={CATEGORIAS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}


            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    },
    title:{
        fontSize:52,
        fontWeight:'bold',
        color:'red',
        marginTop: 20,
    },
    headerTitle:{
        fontSize:36,
        fontWeight:'bold',
        color:'red',
        marginTop: 50,
    },
    headerSubtitle:{
        fontSize:19,
        color:"#666",
        marginBottom:25,
    },
    listContent:{
        paddingBottom:20,

    },
    card:{
        backgroundColor:'#f9f9f9',
        padding:25,
        borderRadius:12,
        marginBottom:12,
        borderWidth:1,
        shadowColor:'#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,

    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
    },
})