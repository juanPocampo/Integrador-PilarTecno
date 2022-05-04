import { NavigationContainer } from "@react-navigation/native";
import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { theme } from "../../services/constants";
import { styles } from "./styles";

export default Home = ({ navigation }) => {
  const sectores = useSelector((state) => state.sector.sectores);
  console.log("s",sectores);
  const onPressHandle = (action) => {
    switch (action) {
      case "Home":
        Alert.alert("Invalid Request", "Usted ya se encuentra en Home", [
          { text: "Ok", onPress: () => console.log("Perfecto") },
        ]);
        break;

      default:
        navigation.navigate(action);
        break;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ImageBackground
        style={styles.mainContent}
        source={theme.backgroundImage}
      >
        <View></View>
      </ImageBackground>
    </SafeAreaView>
  );
};
