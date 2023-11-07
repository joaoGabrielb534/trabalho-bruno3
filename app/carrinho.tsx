import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { House,UserCircle,ShoppingCartSimple,SignOut} from "phosphor-react-native"



export default function Login() {
  const [cpf,setcpf]=useState()
  const[senha,setsenha]=useState()
  return (
    <View style={styles.container}>
      <View style={styles.barra}>

        <Link href={"/"}>
            <SignOut
            size={30}
            color='#3BAFDA'
            />
        </Link>

        <Link href={"mercado"}>
          <House
            size={30}
            color='#3BAFDA'      
          />
        </Link>

        <Link href={"carrinho"}>
            <ShoppingCartSimple
            size={30}
            color='#3BAFDA'
            />
        </Link>

        <Link href={"perfil"}>
            <UserCircle
            size={30}
            color='#3BAFDA'
            />
        </Link>
       
      </View>

      <View style={styles.cart}>

      <ShoppingCartSimple
      size={150}
      />

      <Text>Seu carrinho esta vazio!</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BAFDA'
  },
  barra:{
    borderWidth: 1,
    paddingVertical: 23,
    backgroundColor: "#FFB933",
    borderColor: "#FFB933",
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  cart:{
    alignItems: 'center',
    marginTop: "50%"

  }
});