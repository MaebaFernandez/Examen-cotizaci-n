import React from 'react';
import{StyleSheet, TextInput,Text , View} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

export default function FormCliente(props){
   
    const {SetNombreCliente,SetTipoRecibo,SetFormaPago,SetMoneda,SetFecha} = props;
    const inputRefs = {};

    const state = {
        formaPago: undefined,
        items: [
            {
                label: 'Efectivo',
                value: 'Efectivo',
            },
            {
                label: 'Cheque Nominativo',
                value: 'ChequeNominativo',
            },
            {
                label: 'Targeta de  credito',
                value: 'Targetadecredito',
            },
            {
                label: 'Transferencia Bancaria',
                value: 'TransferenciaBancaria',
            },
        ],
        TipoRecibo:undefined,
        items1:[
            {
                label: 'Factura',
                value: 'factura',
            },
            {
                label: 'Nota de Credito',
                value: 'credito',
            }
        ],
        Moneda:undefined,
        items2:[
            {
                label: 'Bolivianos  bs',
                value: 'Bs',
            },
            {
                label: 'Dolares $',
                value: '$',
            },
            {
                label: 'Euros',
                value: 'EUrs',
            },
            {
                label: 'Rublo ruso',
                value: 'Rub',
            }
        ],

        listaClientes: undefined,  
        items3: [
            {
                value: "Marco Marca",
                label:"Marco Marca",
            },
            {
                    
                value: 'Eber',
                label: 'Kachi'
            },
            {
                value:  'Maeba',
                label: 'Fernandez'
            },
            {
                value:  'Ariel',
                label: 'Vargas'
            },
            {
                value:  'Erick',
                label: 'Terrazas'
            }
        ],
    };

    return (
        <View style={estilo.formulario}>
            
            <View style ={estilo.container}>
                 <Text style={estilo.text}>Cliente : </Text>
                
                 <RNPickerSelect style={estilo.select}
                    placeholder={{
                        label: 'Select a Client',
                        value: null,
                    }}
                    items={state.items3}
                    onValueChange={(value) => {
                        SetNombreCliente({
                            ListaClientes: value,
                        });
                    }}
                    value={state.listaClientes}
                    
                />

                <Text style={estilo.text}>Seleccion la forma Pago : </Text>
                
                <RNPickerSelect 
                   placeholder={{
                       label: 'Select forma Pago',
                       value: null,
                   }}
                   items={state.items}
                   onValueChange={(value) => {
                       SetFormaPago({
                          formaPago: value,
                       });
                   }}
                   value={state.formaPago}
                   
               />

            <Text style={estilo.text}>Seleccion la  tipo de recibo : </Text>
                
                <RNPickerSelect 
                   placeholder={{
                       label: 'Select TipoRecibo',
                       value: null,
                   }}
                   items={state.items1}
                   onValueChange={(value) => {
                       SetTipoRecibo({
                          TipoRecibo: value,
                       });
                   }}
                   value={state.TipoRecibo}
                   
               />

        <Text style={estilo.text}>Seleccion tipo moneda : </Text>
                
                <RNPickerSelect 
                   placeholder={{
                       label: 'Select Moneda',
                       value: null,
                   }}
                   items={state.items2}
                   onValueChange={(value) => {
                       SetMoneda({
                          Moneda: value,
                       });
                   }}
                   value={state.Moneda}
                   
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
