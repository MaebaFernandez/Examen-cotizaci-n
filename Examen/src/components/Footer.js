import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function Footer(props) {
    const {calcular} = props
  return (
    <View style={estilo.disenoFooter}>
        <TouchableOpacity style={estilo.boton} onPress={calcular}>
            <Text style={estilo.texto}>Calcular</Text>
        </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
    disenoFooter: {
    
        bottom: 0,
        width:"100%",
        backgroundColor: "#ffeeff",
        height: 100,
        borderTopLeftRadius:10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent:"center"
    },
    texto: {
        fontWeight:"bold",
        fontSize: 18,
        color:'#fff',
        textAlign:'center'
    },
    boton:{
        backgroundColor: "#560027",
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
});
