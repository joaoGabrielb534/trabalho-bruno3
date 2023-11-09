import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';



export default function Cadastro() {
  return (
    <View style={styles.container}>

    <Text style={styles.textoc}>Digite o seu e-mail abaixo para enviarmos o link para a redefinição de senha.</Text>

    <TextInput onChangeText={(Text)=>{
        console.log(Text)
      }} style={styles.input} placeholder=' E-mail'/>

    <TouchableOpacity style={styles.botao}>
        <Link href={"recconfirmacao"}>Enviar</Link>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BAFDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoc:{
    fontSize: 17
  },
  input:{
    borderWidth: 1,
    width: 250,
    height: 35,
    marginTop: "6%",
    borderRadius: 11,
    paddingLeft: 20,
    backgroundColor: "#FFB933"
  },
  botao:{
    borderWidth: 1,
    paddingLeft: "7%",
    paddingRight: "7%",    
    padding: 5,
    borderRadius: 11,
    marginTop: "6%",
    backgroundColor: "#FFB933"
  }
});