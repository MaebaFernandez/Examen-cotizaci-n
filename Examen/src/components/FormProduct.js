import React from 'react';
import{StyleSheet, TextInput,Text , View} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default function FormCliente(props){
   
    const {SetNombreProducto,SetPrecio,SetIva} = props;

    
      
    
    const state = {
        Productos: undefined,
        items:[{
            
            label: 'Calsados',
            value:'Calsados',
            precio: '10',
            descripcion:'zapatos de varon',
            iva:'16'
        },
        {
            
            label : 'blusas',
            value:'blusas',
            precio: '16',
            descripcion:'ropa de mujer',
            iva :'10'
        },
        {
           
            label : 'Pantalones',
            value:'Pantalones',
            precio: '10',
            descripcion:'ropa de varon',
            iva :'3'
        },
        {
            
            label : 'Vajillas',
            value:'Vajillas',
            precio: '40',
            descripcion:'varios utencillos de cocina ',
            iva :'16'
        },
        {
            
            label : 'Tenis',
            value:'Tenis',
            precio: '35',
            descripcion:'zapatillas deportivas para  mujer y varon',
            iva :'15'
        }
    ]
    };

    Object.values(state.items).map(e => 
        
            console.log(e)
        
        
       );



      
     




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
                   
                   onValueChange={(value) => SetNombreProducto(value),(iva) => SetIva(iva)}
                   
                   

                   
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
