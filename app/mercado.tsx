import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import {
  House,
  UserCircle,
  ShoppingCartSimple,
  SignOut,
} from "phosphor-react-native";

export default function Login() {
  const [cpf, setcpf] = useState();
  const [senha, setsenha] = useState();
  const adicionaraocarrinho = () => {
    Alert.alert("Item adicionado");
  };
  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Link href={"/"}>
          <SignOut size={30} color="#3BAFDA" />
        </Link>

        <Link href={"mercado"}>
          <House size={30} color="#3BAFDA" />
        </Link>

        <Link href={"carrinho"}>
          <ShoppingCartSimple size={30} color="#3BAFDA" />
        </Link>

        <Link href={"perfil"}>
          <UserCircle size={30} color="#3BAFDA" />
        </Link>
      </View>

      <View style={styles.caixa1}>
        <Image style={styles.caixa} source={require("../assets/caixa.png")} />
        <View>
          <Link href={"produto"}>
            <Text style={styles.Bcaixa}>Caixa</Text>
          </Link>
          <Text>Tamanho: 1M</Text>

          <Text style={styles.preco}>R$ 5</Text>

          <TouchableOpacity onPress={adicionaraocarrinho}>
            <Text style={styles.botao}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.caixa1}>
        <Image style={styles.caixa} source={require("../assets/caixa.png")} />
        <View>
          <Link href={"produto"}>
            <Text style={styles.Bcaixa}>Caixa</Text>
          </Link>
          <Text>Tamanho: 10M</Text>

          <Text style={styles.preco}>R$ 100</Text>

          <TouchableOpacity onPress={adicionaraocarrinho}>
            <Text style={styles.botao}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.caixa1}>
        <Image style={styles.caixa} source={require("../assets/caixa.png")} />
        <View>
          <Link href={"produto"}>
            <Text style={styles.Bcaixa}>Caixa</Text>
          </Link>
          <Text>Tamanho: 2M</Text>

          <Text style={styles.preco}>R$ 10</Text>

          <TouchableOpacity onPress={adicionaraocarrinho}>
            <Text style={styles.botao}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.caixa1}>
        <Image style={styles.caixa} source={require("../assets/caixa.png")} />
        <View>
          <Link href={"produto"}>
            <Text style={styles.Bcaixa}>Caixa</Text>
          </Link>
          <Text>Tamanho: 5M</Text>

          <Text style={styles.preco}>R$ 40</Text>

          <TouchableOpacity onPress={adicionaraocarrinho}>
            <Text style={styles.botao}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3BAFDA",
  },
  caixa: {
    width: 80,
    height: 80,
  },
  caixa1: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 11,
    width: "80%",
    left: "5%",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#C4C4C4",
  },
  barra: {
    borderWidth: 1,
    paddingVertical: 23,
    backgroundColor: "#FFB933",
    borderColor: "#FFB933",
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botao: {
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#FFB933",
  },
  Bcaixa: {
    fontSize: 25,
  },
  preco: {
    fontSize: 20,
    color: "green",
  },
});
