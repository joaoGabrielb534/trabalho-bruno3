import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { House, UserCircle, ShoppingCartSimple, SignOut } from "phosphor-react-native"



export default function Login() {
  const [cpf, setcpf] = useState()
  const [senha, setsenha] = useState()
  const adicionaraocarrinho = () => {
    Alert.alert("Item adicionado");
  };
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

      <View style={styles.caixa1}>

        <Image style={styles.caixa}
          source={require('../assets/caixa.png')}
        />

        <View style={styles.info}>
          <Text>Caixa:</Text>
          <Text>Material: 1 Onda (Simples) - Papelão Ondulado</Text>
          <Text>Espessura do Papel: 4 mm</Text>
          <Text>Cor Interna e Externa: Pardo</Text>
          <Text>QUANTIDADE: UNITÁRIA</Text>
          <Text>DIMENSÃO: Lagura  50cm X Comprimento 70cm X Altura 40cm</Text>

          <Text style={styles.preco}>
            R$ 50
          </Text>

        </View>


        <View>
        <TouchableOpacity onPress={adicionaraocarrinho}>
            <Text style={styles.botao}>Adicionar ao carrinho</Text>
          </TouchableOpacity>

        </View>

      </View>

      <Image style={styles.caixaF}
        source={require('../assets/image.png')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BAFDA'
  },
  caixa: {
    width: 80,
    height: 80
  },
  caixaF: {
    width: 300,
    height: 230,
    marginLeft: 55,
    marginTop: 100
  },
  barra: {
    borderWidth: 1,
    paddingVertical: 23,
    backgroundColor: "#FFB933",
    borderColor: "#FFB933",
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  caixa1: {
    alignItems: 'center',
    paddingHorizontal: 13,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 11,
    width: "90%",
    left: "5%",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#C4C4C4"
  },
  botao: {
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#FFB933",
  },
  info: {
    padding: 5
  },
  preco:{
    fontSize: 20,
    color: "green"
  }
});