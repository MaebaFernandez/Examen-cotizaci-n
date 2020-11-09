import React from 'react';
import{StyleSheet, TextInput,Text , View} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default function FormCliente(props){
   
    const {SetNombreProducto,SetPrecio,SetIva} = props;
    
    const state = {
        Productos: undefined,
        items:[{
            
            label: 'Calsados',
            precio: '10',
            descripcion:'zapatos de varon',
            value:'16'
        },
        {
            
            label : 'blusas',
            precio: '16',
            descripcion:'ropa de mujer',
            value :'10'
        },
        {
           
            label : 'Pantalones',
            precio: '10',
            descripcion:'ropa de varon',
            value :'3'
        },
        {
            
            label : 'Vajillas',
            precio: '40',
            descripcion:'varios utencillos de cocina ',
            value :'16'
        },
        {
            
            label : 'Teniz',
            precio: '35',
            descripcion:'zapatillas deportivas para  mujer y varon',
            value :'15'
        }
    ]
    };


    return (
        <View style={estilo.formulario}>
             <View style ={estilo.container}>
          

            <Text style={estilo.text}>Productos: </Text>
                
                <RNPickerSelect 
                   placeholder={{
                       label: 'Select Product',
                       value: null,
                   }}
                   items={state.items}
                   onValueChange={(value,precio,label) => {
                       SetIva({
                        Productos: value,
                       });
                       SetPrecio({
                        Precio: precio,
                       });
                       SetNombreProducto({
                        NombreProducto: label,
                       });
                   }}
                   value={state.Productos}
                   precio ={state.Productos}
                   label={state.Productos}

                   
               />

      

                <View  />
               
            </View>
            </View>
        )
}

const estilo = StyleSheet.create({
    text:{
        color:'#560027'
    },
    
    formulario:{
        backgroundColor:"#ffeeff",
        paddingTop:20,
       
       width: 400,
        
    },

    container: {
      paddingTop: 50,
      backgroundColor:"#ffeeff",
      paddingHorizontal: 50,
      width:400,
      textShadowColor:'black'
  },
});
