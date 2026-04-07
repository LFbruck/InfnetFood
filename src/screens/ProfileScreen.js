import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function ProfileScreen() {
    // Estado local exigido pelo exercício para gerenciar o tema
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Variáveis dinâmicas de cor que reagem ao estado
    const backgroundColor = isDarkMode ? "#222" : "#fff";
    const textColor = isDarkMode ? "#fff" : "#333";
    const cardColor = isDarkMode ? "#333" : "#f9f9f9";
    const borderColor = isDarkMode ? "#444" : "#eee";

    return (
        <View style={[styles.container, { backgroundColor: backgroundColor }]}>
            <Text style={[styles.titulo, { color: textColor }]}>Configurações</Text>

            <View style={[styles.card, { backgroundColor: cardColor, borderColor: borderColor }]}>

                <View style={styles.infoUsuario}>
                    <Text style={[styles.nomeUsuario, { color: textColor }]}>Administrador</Text>
                    <Text style={styles.emailUsuario}>admin@infnetfood.com</Text>
                </View>

                <View style={styles.linhaConfig}>
                    <Text style={[styles.textoConfig, { color: textColor }]}>
                        {isDarkMode ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
                    </Text>

                    <Switch
                        value={isDarkMode}
                        onValueChange={(valor) => setIsDarkMode(valor)}
                        trackColor={{ false: "#ccc", true: "red" }}
                        thumbColor={"#fff"}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },
    card: {
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    infoUsuario: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingBottom: 15,
        marginBottom: 15
    },
    nomeUsuario: {
        fontSize: 20,
        fontWeight: "bold"
    },
    emailUsuario: {
        fontSize: 16,
        color: "#888",
        marginTop: 5
    },
    linhaConfig: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textoConfig: {
        fontSize: 18,
        fontWeight: "bold"
    }
});