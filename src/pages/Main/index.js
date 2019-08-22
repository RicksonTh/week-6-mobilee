import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";

import styles from "./styles";

import logo from "../../assets/logo.png";

export default class Main extends Component {
  state = {
    newBox: ""
  };

  async componentDidMount() {
    const box = await AsyncStorage.getItem("@Mobilee:box");

    if (box) {
      this.props.navigation.navigate("Box");
    }
  }

  handleSignIn = async () => {
    //Quando o user clicar no botão
    const response = await api.post("boxes", {
      //response representa a requisição a api
      //o método deve ser igual ao que está na api(post, get etc)
      title: this.state.newBox
      //Aqui vai o corpo da requisição. Não precisa ser em json, pois o axios já converte
    });

    await AsyncStorage.setItem("@Mobilee:box", response.data._id);

    this.props.navigation.navigate("Box");
    //No mobile, vai ser a prop navigation. O navigate usa o nome da rota por onde vai navegar
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />

        <TextInput
          style={styles.input}
          placeholder="Crie uma box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.newBox}
          onChangeText={text => this.setState({ newBox: text })}
        />

        <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
