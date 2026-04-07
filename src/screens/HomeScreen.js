import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking, Alert, FlatList,useWindowDimensions } from 'react-native';

const CATEGORIAS = [
    {id: 1, title: "Lanches 🍔"},
    {id: 2, title: "Pizzas 🍕"},
    {id: 3, title: "Pratos Prontos 🍽️"},
    {id: 4, title: "Saladas 🥗"},
    {id: 5, title: "Japonês 🍣"},
    {id: 6, title: "Bebidas 🥤"},
    {id: 7, title: "Sobremesas 🍰"},
    {id: 8, title: "Carnes 🥩"},
];
const RESTAURANTES_MOCK = [
    { id: "1", nome: "Confeitaria Colombo", endereco: "R. Gonçalves Dias, 32 - Centro", tipo: "Cafeteria " },
    { id: "2", nome: "Amarelinho da Cinelândia", endereco: "Praça Floriano, 55 - Centro", tipo: "Bar e Restaurante " },
    { id: "3", nome: "Bar Luiz", endereco: "R. da Carioca, 39 - Centro", tipo: "Comida Alemã " },
    { id: "4", nome: "Rio Minho", endereco: "R. do Ouvidor, 10 - Centro", tipo: "Frutos do Mar " },
    { id: "5", nome: "Hachiko", endereco: "Tv. do Paço, 10 - Centro", tipo: "Japonesa " },
    { id: "6", nome: "Bistrô Ouvidor", endereco: "R. do Ouvidor, 52 - Centro", tipo: "Francesa " },
    { id: "7", nome: "Nova Capela", endereco: "Av. Mem de Sá, 96 - Centro", tipo: "Tradicional " },
    { id: "8", nome: "Santo Scenarium", endereco: "R. do Lavradio, 36 - Centro", tipo: "Brasileira " },
    { id: "9", nome: "Lidador", endereco: "R. da Assembleia, 65 - Centro", tipo: "Contemporânea " },
    { id: "10", nome: "Lanchonete Central", endereco: "Av. Rio Branco, 156 - Centro", tipo: "Lanches " },
];

export default function HomeScreen({ navigation }) {
    const {width} = useWindowDimensions();
    const isMobile = width < 768;

    const abrirNoMapa = async (nome) => {
        const query = encodeURIComponent(`${nome} Centro Rio de Janeiro`);
        const url = `http://googleusercontent.com/maps.google.com/?q=${query}`;
        const suportado = await Linking.canOpenURL(url);
        if (suportado) {
            await Linking.openURL(url);
        } else {
            Alert.alert("Erro", "Não foi possível abrir o mapa.");
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Categorias:</Text>
                <Text style={styles.headerSubtitle}>Qual sua escolha pra hoje?</Text>
            </View>

            <View style={styles.categoriasCombo}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={CATEGORIAS}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.cardCategoria}
                            onPress={() => navigation.navigate("Produtos", {
                                categoryId: item.id,
                                categoryTitle: item.title
                            })}
                        >
                            <Text style={styles.cardText}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            <Text style={styles.mapTitle}>Restaurantes Próximos de Voce (Centro - RJ)</Text>

            <View style={[styles.mapSection, {flexDirection: isMobile ? "column" : "row"}]}>
                <Image
                    source={{uri: "https://static.vecteezy.com/system/resources/previews/000/153/588/original/vector-roadmap-location-map.jpg"}}
                    style={[styles.imagemMapa, {width: isMobile ? "100%" : "30%", height: isMobile ? 250 : 580}]}
                    resizeMode="cover"
                />

                <View
                    style={[styles.listaRestaurantes, {paddingLeft: isMobile ? 0 : 20, marginTop: isMobile ? 20 : 0}]}>
                    {RESTAURANTES_MOCK.map((restaurante) => (

                        <View
                            key={restaurante.id}
                            style={[styles.cardRestaurante, {width: isMobile ? "100%" : "48%"}]}
                        >
                            <View style={styles.cardInfo}>
                                <Text style={styles.restauranteNome}>{restaurante.nome}</Text>
                                <Text style={styles.restauranteEndereco}>{restaurante.endereco}</Text>
                                <Text style={styles.restauranteTipo}>{restaurante.tipo}</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("DetalhesRestaurante", {restaurante: restaurante})}>
                                    <Text style={styles.textoDetalhes}>+ Detalhes</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={() => abrirNoMapa(restaurante.nome)}>
                                <Text style={styles.verMapa}>Ver no Mapa📍</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        padding: 20,
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "red",
        marginTop: 20
    },
    headerSubtitle: {
        fontSize: 16,
        color: "#666",
        marginBottom: 10
    },
    listContent: {
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    categoriasCombo: {
        alignSelf: "center"
    },
    cardCategoria: {
        backgroundColor: "#f9f9f9",
        padding: 20,
        borderRadius: 12,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#eee",
        elevation: 2
    },
    cardText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333"
    },
    mapSection: {
        paddingHorizontal: 20,
        paddingBottom: 40
    },
    mapTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
        marginLeft: 40
    },
    imagemMapa: {
        borderRadius: 12,
        backgroundColor: "#e1e4e8"
    },
    listaRestaurantes: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    cardRestaurante: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#eee",
        elevation: 1
    },
    cardInfo: {
        flex: 1
    },
    restauranteNome: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    restauranteEndereco: {
        fontSize: 14,
        color: "#666",
        marginTop: 4
    },
    restauranteTipo: {
        fontSize: 14,
        color: "red",
        fontWeight: "bold",
        marginTop: 4
    },
    verMapa: {
        fontSize: 14,
        marginLeft: 10
    },
    textoDetalhes: {
        fontSize: 12,
        marginTop:20,
    }
});