import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, View, Alert,Button,Image,SafeAreaView, ScrollView } from 'react-native';
import colores from './src/utils/Colores';

import FormularioProduct from './src/components/FormProduct';

import FormularioCliente from './src/components/FormCliente';
import Resumen from './src/components/Resumen';
import Footer from './src/components/Footer';

export default function App() {
  //Cliente
  const [NombreCliente,SetNombreCliente] = useState(null);
  const [TipoRecibo,SetTipoRecibo] = useState(null);
  const [FormaPagp,SetFormaPago] = useState(null);
  const [Moneda,SetMoneda] = useState(null);
  const [Fecha,SetFecha] = useState(null);
  //Producto
  const [NombreProducto,SetNombreProducto] = useState(null);
  const [Precio,SetPrecio] = useState(null);
  const [Iva,SetIva] = useState(null);
  //descripcion del calculo
  const [Cantidad,SetCantidad] = useState(null);
  const [PrecioTotal,SetPrecioTotal] = useState(null);
  const [TotalIva,SetTotalIva] = useState(null);

  const calcularIva = () =>{
    if(!Cantidad){
        console.log("ingrese Cantidad");
    }else if(!Iva){
        console.log("ingrese Iva");
    }else if(!Precio){
        console.log("ingrese Precio del Producto");
    }else if(!NombreProducto){
      console.log("ingrese Nombre del Producto");
    }else if(!NombreCliente){
      console.log("ingrese Nombre del Cliente");
    }
    else{
        console.log("Ok");
        
    }

    setTotalIva =()=>{
      TotalIva= Cantidad*(Iva*Precio/100);

    } 
    PrecioTotal =Cantidad*Precio+TotalIva; 
   
    console.log(Precio*Cantidad);
    console.log(TotalIva);
    console.log(PrecioTotal);
    

}

    return (

      <SafeAreaView style={styles.container}>
      <ScrollView>
      
        <Fragment>
              <View style = {estilo.vista}>
              <View style={styles.estiloTitulo}>
                <Text style={styles.titulo}>
                    Cotizador de Iva </Text>
                </View>
              <Image style={estilo.logo} source= {require('./src/assets/cotizacion.png')}></Image>
              <Text style={styles.titulo1}>
                    Formulario </Text>
            <View style={styles.container}>
           
            <FormularioCliente SetNombreCliente={SetNombreCliente} SetTipoRecibo={SetTipoRecibo} SetFormaPago={SetFormaPago} SetMoneda={SetMoneda} SetFecha={SetFecha}/>
            <FormularioProduct SetNombreProducto={SetNombreProducto} SetPrecio={SetPrecio} SetIva={SetIva}/>
            
            </View>
            <Text style={styles.titulo1}>
                    descripcion </Text>

            <Resumen SetCantidad={SetCantidad} SetPrecioTotal={SetPrecioTotal}/>
            
            <Footer calcular={calcularIva} />
              
              
              </View>
            
  
            

        </Fragment>

        </ScrollView>
    </SafeAreaView>





    );
}

const styles = StyleSheet.create({
    estiloTitulo:{
        backgroundColor:"#bf5f82",
        height: 100,
        width:'100%',
        alignItems: "center",
    },
    estiloTitulo1:{
        backgroundColor:colores.COLOR_OSCURO,
        height: 350,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        alignItems: "center",    
    },
    titulo:{
        fontSize:30,
        fontWeight:"bold",
        color:'#fff',
        marginTop:25,
    },
    
    titulo1:{
        fontSize:30,
        fontWeight:"bold",
        color:'#fff',
        marginTop:25,
    },
    container: {
      flex: 1,
    }
});

const estilo = StyleSheet.create({
    formulario:{
        
        backgroundColor:colores.COLOR_PRIMARIO,
        borderRadius:20,
        justifyContent:'center',
    },
    Labe:{
        position:"relative",
        height: 50,
        backgroundColor:"#fff",
        width:"60%",
        marginBottom:10,
        color:"#000",
        paddingHorizontal:20,
        justifyContent:'center'
     
    },
   
    
    rowInput:{
        flexDirection: 'row'


    },
    vista:{
      flex:1,
      alignItems:'center',
      backgroundColor:"#f48fb1"
  },
  logo:{
      width: '100%',
      height: 200,
      marginTop: 20,
      marginBottom: 5
  }
})