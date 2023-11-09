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
  Alert,
  Image,
} from "react-native";
import {
  House,
  UserCircle,
  ShoppingCartSimple,
  SignOut,
  AlignRight,
  QrCode,
} from "phosphor-react-native";

export default function Login() {
  const [cpf, setcpf] = useState();
  const [senha, setsenha] = useState();
  const FinalizarPedido = () => {
    Alert.alert("Pedido Finalizado");
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
      <View>
        <View style={styles.caixa1}>
          <Image style={styles.caixa} source={require("../assets/caixa.png")} />

          <View style={styles.info}>
            <Text style={styles.Bcaixa}>Caixa</Text>
            <Text>Tamanho: 10M</Text>
            <Text>Itens: 1</Text>
          </View>
        </View>
        <View style={styles.caixa1}>
          <Image style={styles.caixa} source={require("../assets/caixa.png")} />

          <View style={styles.info}>
            <Text style={styles.Bcaixa}>Caixa</Text>
            <Text>Tamanho: 1M</Text>
            <Text>Itens: 2</Text>
          </View>
        </View>
      </View>
      <View style={styles.compras}>
        <View style={styles.descricao}>
          <Text>
            Caixa: 1M x2 = <Text style={styles.valortotal}> R$10</Text>
          </Text>
          <Text>
            Caixa: 10M x1 = <Text style={styles.valortotal}> R$100</Text>
          </Text>
        </View>
        <Text style={styles.valor}>
          Valor Total: <Text style={styles.valortotal}>R$110</Text>
        </Text>
      </View>
      <View>
      <TouchableOpacity onPress={FinalizarPedido}>
        <Text style={styles.pagamento}>
            Finalizar Pedido
        </Text>
        </TouchableOpacity>
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
  caixaF: {
    width: 300,
    height: 230,
    marginLeft: 55,
    marginTop: 100,
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
  caixa1: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 5,
    borderRadius: 80,
    width: "40%",
    left: "15%",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: -50,
    backgroundColor: "#C4C4C4",
  },
  botao: {
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: "#FFB933",
  },
  info: {
    padding: 5,
  },
  preco: {
    fontSize: 20,
    color: "green",
  },
  Bcaixa: {
    fontSize: 25,
  },
  compras: {
    marginHorizontal: 100,
    marginVertical: "-90%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    height: "30%",
    backgroundColor: "#C4C4C4",
    left: 90,
  },
  valor: {
    color: "black",
    fontSize: 18,
    width: 180,
    left: 12,
    top: 50,
    borderWidth: 2,
    borderRadius: 10,
    textAlign: `center`,
  },
  valortotal: {
    color: "green",
  },
  descricao: {
    borderWidth: 0,
    height: 150,
    width: 190,
    left: 10,
  },
  pagamento: {
    textAlign: "center",
    borderWidth: 2,
    width: 100,
    marginTop: -100,
    marginLeft: -50,
    backgroundColor: "#FFB933",
    borderRadius: 6,
    top: 500,
    left: 300,
    borderColor: "black",
  },
});
