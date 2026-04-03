import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert, TouchableOpacity, Platform} from 'react-native';

const MOCK_USER = {
    email: 'aluno@infnet.edu.br',
    password: '123456'
};

export default function LoginScreen( {navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin =  () => {

        const erroEmailInvalido = "Email invalido! O formato do Email não foi reconhecido. Certifique-se de usar @";
        const erroSenhaDigitos = "Sua senha é fraca! A senha deve conter pelo menos 6 digitos.";

        const erroCredenciais = "Seu email ou sua senha estão incorretos!"

        if(!email.includes('@')){
            if (Platform.OS === 'web') {
                alert(erroEmailInvalido);
            } else {
                Alert.alert("Erro", erroEmailInvalido);
            }
            return;

        }

        if (password.length < 6) {
            if (Platform.OS === 'web') {
                alert(erroSenhaDigitos);
            } else {
                Alert.alert("Erro", erroSenhaDigitos);
            }
            return;
        }

        if (email === MOCK_USER.email && password === MOCK_USER.password) {
            navigation.navigate('Home');
        } else {
            if (Platform.OS === 'web') {
                alert(erroCredenciais);

            } else {
                Alert.alert("Erro", erroCredenciais);

            }
            return;

        }

        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>InfnetFood</Text>
            <Text style={styles.text}>Faça seu Login para continuar</Text>

            <TextInput
            style={styles.input}
            placeholder={"Digite seu E-mail"}
            keyboardType="email-address"
            autoCapitalize={"none"}
            value={email}
            onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder={"Digite sua Senha"}
                secureTextEntry={true}
                autoCapitalize={"none"}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>





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
        fontSize: 62,
        fontWeight: 'bold',
        color: "red"

    },
    text: {
        fontSize: 20,
        color: "#666",
        marginBottom: 50,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom:15,
        fontSize: 16,
    },
    button:{
        fontSize: 16,
        marginTop: 5,
        backgroundColor: "red",
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        width: 150,

    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
    }
})