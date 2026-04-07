import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Platform, ScrollView, ActivityIndicator } from "react-native";
import * as Notifications from "expo-notifications";

export default function CheckoutScreen({ navigation }) {
    const [endereco, setEndereco] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");
    const [erroEndereco, setErroEndereco] = useState("");
    const [erroPagamento, setErroPagamento] = useState("");
    const [carregando, setCarregando] = useState(false);

    const enviarNotificacao = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Pedido Confirmado! 🍔",
                body: "Seu lanche já está sendo preparado e logo sairá para entrega.",
            },
            trigger: null,
        });
    };

    const handleFinalizarCompra = () => {
        let temErro = false;

        if (endereco.trim() === "") {
            setErroEndereco("preencha endereço de entrega.");
            temErro = true;
        }

        if (metodoPagamento === "") {
            setErroPagamento("selecione um método de pagamento.");
            temErro = true;
        }

        if (temErro) return;

        setCarregando(true);

        setTimeout(async () => {
            setCarregando(false);
            await enviarNotificacao();

            if (Platform.OS === "web") {
                window.alert("Pedido Confirmado! Sua comida já está sendo preparada. Obrigado pela preferência!!!");
                navigation.navigate("Home");
            } else {
                Alert.alert(
                    "Sucesso",
                    "Pedido Confirmado! Sua comida já está sendo preparada. Obrigado pela preferência!!!",
                    [
                        { text: "OK", onPress: () => navigation.navigate("Home") }
                    ]
                );
            }
        }, 2000);
    };

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={styles.titulo}>Revise seu Pedido</Text>

            <View style={styles.resumoCard}>
                <Text style={styles.resumoTexto}>1x Hamburguer sem tomate</Text>
                <Text style={styles.resumoTexto}>1x Coca-Cola Zero</Text>
                <Text style={styles.resumoTotal}>Total a pagar: R$ 45,90</Text>
            </View>

            <Text style={styles.label}>Endereço de Entrega (*obrigatório)</Text>
            <TextInput
                style={[styles.input, erroEndereco !== "" && styles.inputErro]}
                placeholder="Ex: Rua das Flores, 123 - Centro"
                value={endereco}
                onChangeText={(texto) => {
                    setEndereco(texto);
                    setErroEndereco("");
                }}
                editable={!carregando}
            />

            {erroEndereco !== "" && <Text style={styles.textoErro}>{erroEndereco}</Text>}

            <Text style={styles.label}>Forma de Pagamento (*obrigatório)</Text>
            <View style={styles.botoesPagamento}>
                <TouchableOpacity
                    style={[styles.botaoPagamento, metodoPagamento === "Pix" && styles.botaoAtivo]}
                    onPress={() => {
                        setMetodoPagamento("Pix");
                        setErroPagamento("");
                    }}
                    disabled={carregando}
                >
                    <Text style={[styles.textoBotao, metodoPagamento === "Pix" && styles.textoAtivo]}>Pix</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botaoPagamento, metodoPagamento === "Cartão" && styles.botaoAtivo]}
                    onPress={() => {
                        setMetodoPagamento("Cartão");
                        setErroPagamento("");
                    }}
                    disabled={carregando}
                >
                    <Text style={[styles.textoBotao, metodoPagamento === "Cartão" && styles.textoAtivo]}>Cartão</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botaoPagamento, metodoPagamento === "Dinheiro" && styles.botaoAtivo]}
                    onPress={() => {
                        setMetodoPagamento("Dinheiro");
                        setErroPagamento("");
                    }}
                    disabled={carregando}
                >
                    <Text style={[styles.textoBotao, metodoPagamento === "Dinheiro" && styles.textoAtivo]}>Dinheiro</Text>
                </TouchableOpacity>
            </View>

            {erroPagamento !== "" && <Text style={styles.textoErroPagamento}>{erroPagamento}</Text>}

            <TouchableOpacity
                style={[styles.botaoFinalizar, carregando && styles.botaoCarregando]}
                onPress={handleFinalizarCompra}
                disabled={carregando}
            >
                {carregando ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.textoBotaoFinalizar}>Confirmar e Fazer Pedido</Text>
                )}
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 50
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15
    },
    resumoCard: {
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#eee",
        marginBottom: 25
    },
    resumoTexto: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5
    },
    resumoTotal: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red",
        marginTop: 10
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        backgroundColor: "#fff",
        marginBottom: 10
    },
    inputErro: {
        borderColor: "red"
    },
    textoErro: {
        color: "red",
        fontSize: 14,
        marginBottom: 20,
        fontWeight: "bold"
    },
    botoesPagamento: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    textoErroPagamento: {
        color: "red",
        fontSize: 14,
        marginBottom: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    botaoPagamento: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 12,
        borderRadius: 8,
        marginHorizontal: 5,
        alignItems: "center",
        backgroundColor: "#f9f9f9"
    },
    botaoAtivo: {
        borderColor: "red",
        backgroundColor: "#ffe6e6"
    },
    textoBotao: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#666"
    },
    textoAtivo: {
        color: "red"
    },
    botaoFinalizar: {
        backgroundColor: "red",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center"
    },
    botaoCarregando: {
        backgroundColor: "#ff6666"
    },
    textoBotaoFinalizar: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
});