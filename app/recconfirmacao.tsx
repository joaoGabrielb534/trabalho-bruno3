import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';



export default function Cadastro() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Um link para a redefinição da sua senha foi enviado para o seu e-mail.</Text>

        <Text style={styles.text1}>Clique no botão 'Início' para retornar à tela de login.</Text>

        <TouchableOpacity style={styles.botao}>
        <Link href={"/"}>Início</Link>
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
  text:{
    fontSize: 16
  },
  text1:{
    fontSize: 16,
    marginTop: 15,
  },
  botao: {
    borderWidth: 1,
    paddingLeft: "7%",
    paddingRight: "7%",    
    padding: 5,
    borderRadius: 11,
    marginTop: "10%",
    backgroundColor: "#FFB933"
  }
});