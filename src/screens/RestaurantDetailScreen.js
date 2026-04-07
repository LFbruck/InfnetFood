import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function RestaurantDetailScreen({ route }) {
    const { restaurante } = route.params;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://via.placeholder.com/800x400.png?text=Capa+do+Restaurante" }}
                style={styles.imagemCapa}
                resizeMode="cover"
            />

            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{restaurante.nome}</Text>
                <Text style={styles.tipo}>{restaurante.tipo}</Text>
                <Text style={styles.endereco}>📍 {restaurante.endereco}</Text>

                <View style={styles.divisor} />

                <Text style={styles.sobreTitulo}>Sobre o local</Text>
                <Text style={styles.sobreTexto}>
                    O estabelecimento {restaurante.nome} é uma escolha para quem busca a melhor experiência em {restaurante.tipo}. Venha nos visitar no endereço abaixo e aproveite nosso ambiente!
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    imagemCapa: {
        width: "100%",
        height: 200,
        backgroundColor: "#e1e4e8"
    },
    infoContainer: {
        padding: 20
    },
    nome: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5
    },
    tipo: {
        fontSize: 18,
        color: "red",
        fontWeight: "bold",
        marginBottom: 10
    },
    endereco: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20
    },
    divisor: {
        height: 1,
        backgroundColor: "#eee",
        marginVertical: 15
    },
    sobreTitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10
    },
    sobreTexto: {
        fontSize: 16,
        color: "#555",
        lineHeight: 24
    }
});