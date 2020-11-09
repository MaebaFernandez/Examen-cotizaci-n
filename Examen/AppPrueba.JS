/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SeccionButon from './src/components/SeccionButon';

export default function App() {
  return (
        <View style = {estilo.vista}>
             <Text style={styles.sectionTitle}> App Cotizador de Iva  </Text>
            <Image style={estilo.logo} source= {require('./src/assets/cotizacion.png')}></Image>

            <SeccionButon/>  
           
        </View>


   );
};

const styles = StyleSheet.create({
  
  sectionTitle: {
    fontSize: 40,
    color: "#fce4ec",
    fontWeight: '700',
    backgroundColor: "#bf5f82"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
const estilo = StyleSheet.create({
  vista:{
      flex:1,
      alignItems:'center',
      backgroundColor:"#f48fb1"
  },
  logo:{
      width: '100%',
      height: 240,
      marginTop: 40,
      marginBottom: 40
  }
})