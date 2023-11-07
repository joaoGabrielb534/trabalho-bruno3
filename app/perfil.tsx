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

       <Link href={"Perfil"}>  
            <UserCircle
            size={30}
            color='#3BAFDA'
            />
        </Link>
       
      </View>

      <View style={styles.statperfil}>

        <UserCircle
          size={150}
          />

        <View>
        <Text style={styles.botao}>João Moura Patriota</Text>
        <Text style={styles.botao}>CPF: 123.456.789.10</Text>
        <Text style={styles.botao}>Cidade: Itapetim</Text>
        <Text style={styles.botao}>Estado: Pernambuco-PE </Text>
        <Text style={styles.botao}>Rua: Avenida Imaginária</Text>
        <Text style={styles.botao}>Número: 11</Text>
        </View>


      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BAFDA',
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
  statperfil:{
    alignItems: 'center',
    marginTop: 90,
    
    
  },
  botao:{
    borderWidth: 1,
    paddingLeft: 7,
    paddingRight: 7,    
    padding: 5,
    borderRadius: 11,
    margin: 6,
    backgroundColor:"#fff",
  }
});