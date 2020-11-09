import React from 'react';
import{StyleSheet, Text , View,TextInput} from 'react-native';


export default function Resumen(props){
  const {SetCantidad, SetPrecioTotal}=props;

    
    return(
        <View style={estilo.formulario}>
            
               <Text  style={estilo.Labe} >Cantidad:  </Text>
                <TextInput 
                    style={estilo.textInput} 
                    placeholder="Ingrese Cantidad" 
                    placeholderTextColor="#969696"
                    onChange= {(e) => SetCantidad(e.nativeEvent.text)}/>
   
              
   
              


              
        </View>
            


         
         
        
    )
};
const estilo = StyleSheet.create({
    text:{
        color:'#560027'
    },
    
    formulario:{
        backgroundColor:"#ffeeff",
        paddingTop:20,
       
       width: 400,
        
    },
    Labe:{
        position:"relative",
        height: 50,
        backgroundColor:"#ffeeff",
        width:"60%",
        marginBottom:10,
        color:"#000",
        paddingHorizontal:20,
        justifyContent:'center'
     
    },
   
    
    rowInput:{
        flexDirection: 'row'


    }
})