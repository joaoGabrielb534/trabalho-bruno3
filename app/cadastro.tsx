import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';



export default function Cadastro() {
  return (
    <View style={styles.container}>
    <Text style={styles.texto}>Hiper Facisa</Text>

      <TextInput onChangeText={(text)=>{
        console.log(text)
      }} style={styles.input} placeholder='CPF'/>

      <TextInput onChangeText={(text)=>{
        console.log(text)
      }} style={styles.input} placeholder='E-mail'/>

      <TextInput onChangeText={(Text)=>{
        console.log(Text)
      }} secureTextEntry style={styles.input} placeholder=' Senha'/>

      <TextInput onChangeText={(Text)=>{
        console.log(Text)
      }} secureTextEntry style={styles.input} placeholder='Confirmar Senha'/>

      
      <TouchableOpacity style={styles.botao}>
        <Link href={"confirmacao"} >Cadastrar-se</Link>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    borderWidth: 1,
    width: 250,
    height: 35,
    marginBottom: "5%",
    borderRadius: 11,
    paddingLeft: 20  
  },
  texto:{
    marginBottom: "10%",
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#3BAFDA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    borderWidth: 1,
    paddingLeft: "7%",
    paddingRight: "7%",    
    padding: 5,
    borderRadius: 11
  },
  botao2:{
    marginTop: 20
  },
  botao3:{
    marginTop: 10
  }
});
