import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const { login } = useAuth();

    const handleEntrar = () => {
        const sucesso = login(email, senha);

        if (!sucesso) {
            const mensagemErro = " Use admin e 123.";
            if (Platform.OS === "web") {
                window.alert(mensagemErro);
            } else {
                Alert.alert("Erro", mensagemErro);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>InfnetFood</Text>

            <View style={styles.cardLogin}>
                <Text style={styles.subtitulo}>Acesse sua conta</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail (digite: admin)"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha (digite: 123)"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.botaoEntrar} onPress={handleEntrar}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    titulo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "red",
        marginBottom: 30
    },
    cardLogin: {
        backgroundColor: "#fff",
        padding: 25,
        borderRadius: 12,
        width: "100%",
        maxWidth: 400,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        backgroundColor: "#fafafa",
        marginBottom: 15
    },
    botaoEntrar: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10
    },
    textoBotao: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
});