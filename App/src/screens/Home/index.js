import { NavigationContainer } from "@react-navigation/native";
import React, { Component, useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Button, Card, Image } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { setSector } from "../../redux/Actions/api.action";
import { theme } from "../../services/constants";
import { styles } from "./styles";

export default Home = ({ navigation }) => {
  const sectores = useSelector((state) => state.sector.sectores);
  const dispatch = useDispatch()

  useEffect(() => {}, []);

  const onPressHandle = (sec) => {
    dispatch(setSector(sec))
    navigation.navigate("Vias")
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ImageBackground
        style={styles.mainContent}
        source={theme.backgroundImage}
      >
        <ScrollView>
          {sectores && sectores.length > 0 ? (
            sectores.map((sec) => (
              <Card containerStyle={styles.card} key={sec._id}>
                <Card.Title>{sec.name}</Card.Title>
                <View style={styles.cardContainer}>
                  <Card.Image
                    source={{ uri: sec.images[0] }}
                    style={styles.cardMedia}
                    resizeMode="cover"
                    alt="No PReview"
                  />
                  <Button
                    title="Ver Sector"
                    style={styles.buttonContent}
                    onPress={() => onPressHandle(sec)}
                  />
                </View>
              </Card>
            ))
          ) : (
            <ActivityIndicator size="large" color={theme.colors.primary} />
          )}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
