import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const USUARIO_MOCK ={
    nome: "Cidcley",
    email: "aluno@infnet.edu.br",
    clienteDesde: "Abril de 2026",
    avatar:"👤"
}

export default function ProfileScreen({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.avatar}>{USUARIO_MOCK.avatar}</Text>
                <Text style={styles.nome}>{USUARIO_MOCK.nome}</Text>
                <Text style={styles.email}>{USUARIO_MOCK.email}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Membro desde:</Text>
                <Text style={styles.value}>{USUARIO_MOCK.clienteDesde}</Text>
            </View>
            <TouchableOpacity
                style={styles.botaoSair}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.textoBotaoSair}>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    header: {
        alignItems: 'center',
        marginVertical: 40
    },
    avatar: {
        fontSize: 80,
        marginBottom: 10
    },
    nome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333'
    },
    email: {
        fontSize: 16,
        color: '#666'
    },
    infoContainer: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 12,
        marginBottom: 40
    },
    label: {
        fontSize: 14,
        color: '#999',
        marginBottom: 5 },
    value: { fontSize: 18,
        fontWeight: '500',
        color: '#333' },
    botaoSair: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'red',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    textoBotaoSair: { color: 'red', fontWeight: 'bold', fontSize: 16 }
});