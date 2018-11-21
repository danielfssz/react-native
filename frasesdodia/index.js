import React from "react";
import { AppRegistry, View, Image, TouchableOpacity, Text, Alert } from "react-native";

const Estilos = {
    principal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao: {
        backgroundColor: '#538530',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 20
    },
    textoBotao: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
}

const gerarFrase = () => {
    var nAleatorio = Math.floor(Math.random() * 5);

    var frases = Array();
    frases[0] = '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci elit..."';
    frases[1] = 'Lorem ipsum habitasse etiam enim pellentesque, quisque erat curae nullam magna, interdum vestibulum ullamcorper tempus.';
    frases[2] = 'Lorem ipsum habitasse dictum faucibus gravida, porta mauris in congue consectetur, adipiscing quis donec placerat. ';
    frases[3] = 'Lorem ipsum sociosqu molestie dictumst donec, a eu tellus aenean odio, curabitur sodales curabitur felis. ';
    frases[4] = 'Donec leo vivamus curabitur dictum pharetra netus dictum torquent, posuere vivamus amet quisque inceptos id. ';

    Alert.alert(frases[nAleatorio]);    
}

const App = () => {
    const { principal, botao, textoBotao } = Estilos;

    return (
        <View style={principal}>
            <Image
                source={require('./imgs/logo.png')}
            />
            <TouchableOpacity 
            onPress={gerarFrase}
            style={botao}>
                <Text style={textoBotao}>Nova frase...</Text>
            </TouchableOpacity>
        </View>
    );
};

AppRegistry.registerComponent('frasesdodia', () => App);

