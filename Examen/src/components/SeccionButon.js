import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';



export default function SeccionBotones(props) {
    console.log(props);
    const { mostrarLista,setMostrarLista } = props;
    return (
      <View style={estilo.posicionBotones}>
          <View style={estilo.cerrar}>
              <Text style={estilo.texto} onPress={()=> setMostrarLista(!mostrarLista)}>nuevo cumpleaños 
                    { mostrarLista 
                    ?"Nuevo cumpleanero"
                    :"Cancelar"} 
              >Empezar a Cotizar
              
              </Text>
          </View>
              
      </View>
    );
  }
  
const estilo = StyleSheet.create({
    posicionBotones:{
        position:'relative',
        bottom: 0,
        width: "100%",
        height: 50,
        justifyContent: "space-between",
        alignContent: "center",
        paddingHorizontal: 30
    }, 
    cerrar:{
        backgroundColor: "#ffc1e3",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal:30
    },
    texto:{
        color:"#442731",
        fontSize:16,
        textAlign:"center"
    }
})

