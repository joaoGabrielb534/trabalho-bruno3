import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';


export default function Login() {
  const [cpf,setcpf]=useState()
  const[senha,setsenha]=useState()
  return (
    <View style={styles.container}>

      <Image style={styles.logo}
        source={require('../assets/shop_106574.png')}
      />
      <View style={styles.Vlogo}>
      
      <Image style={styles.logotexto}
        source={require('../assets/Caixas_TGL.png')}
      />

      </View>
      
      <View>
      <TextInput onChangeText={(Text)=>{
        console.log(Text)
      }} style={styles.input} placeholder=' CPF'/>

      <TextInput onChangeText={(Text)=>{
        console.log(Text)
      }} secureTextEntry style={styles.input} placeholder=' Senha'/>
      </View>
      
      <TouchableOpacity style={styles.botao}>
        <Link href={"mercado"}>Entrar</Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2}>
        <Link href={"cadastro"}>Não tem uma conta? Cadastre-se</Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao2}>
        <Link href={"recuperacao"}>Esqueceu a senha ?</Link>
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
    paddingLeft: 20,
    backgroundColor: "#FFB933"  
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
    borderRadius: 11,
    backgroundColor: "#FFB933"
  },
  botao2:{
    marginTop: 20
  },
  botao3:{
    marginTop: 10
  },
  logo:{
    width: 140,
    height: 140,
    marginBottom: 100,
  },
  logotexto:{
    width: 300,
    height: 40,
    objectFit: "fill",
  },
  Vlogo:{
    marginBottom: 10
  }
});
