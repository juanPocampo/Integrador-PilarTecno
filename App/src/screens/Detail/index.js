import { types } from "@babel/core";
import React, { Component, useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { ListItem } from "react-native-elements";
import { styles } from "./styles";
import { theme } from "../../services/constants";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AppHeader from "../../components/Header";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default Detail = (props) => {
  const [via, setVia] = useState(props.route.params.item);
  console.log(via);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <ImageBackground
        style={styles.mainContent}
        source={{ uri: via.images[0] || "" }}
        alt="Black"
        resizeMode="cover"
      >
        <View style={styles.titleContainer}>
          <Text>{via.name}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{via.grade}</Text>
          <Text>{via.opener}</Text>
          <Text>{via.climbingType}</Text>
        </View>
          <Image
            source={{ uri: via.preview }}
            style={styles.previewImage}
            alt="no preview"
            resizeMode="contain"
          />
        <View style={styles.descContainer}>
          <Text>{via.desc}</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
