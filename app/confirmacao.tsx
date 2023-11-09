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
} from "react-native";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logotexto}
          source={require("../assets/Caixas_TGL.png")}
        />
      </View>
      <Text style={styles.textoCon}>Sua conta foi criada com sucesso !</Text>
      <Text style={styles.textoini}>
        Aperte no botão "início" para voltar à tela de login.
      </Text>

      <TouchableOpacity style={styles.botaoini}>
        <Link href={"/"}>Início</Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    marginBottom: "10%",
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#3BAFDA",
    alignItems: "center",
    justifyContent: "center",
  },
  textoCon: {
    fontSize: 17,
  },
  textoini: {
    marginTop: 20,
    fontSize: 16,
  },
  botaoini: {
    borderWidth: 1,
    marginTop: 30,
    paddingLeft: "7%",
    paddingRight: "7%",
    borderRadius: 11,
    padding: 5,
    backgroundColor: "#FFB933",
  },
  logotexto: {
    top: -10,
    width: 300,
    height: 40,
    objectFit: "fill",
  },
});
