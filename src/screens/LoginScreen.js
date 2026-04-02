import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function LoginScreen( {navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>InfnetFood</Text>
            <Text style={styles.text}>Faça seu Login para continuar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        color: "red"

    },
    text:{
        fontSize: 16,
        color: "#666",
        marginBottom: 20,
    }
})