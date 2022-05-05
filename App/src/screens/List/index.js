import React, { useState, useEffect, useCallback } from "react";
import {
  RefreshControl,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Text, Avatar, Button, Icon, ListItem } from "react-native-elements";
import { getSectorById } from "../../services/api.services";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import { theme } from "../../services/constants";
import AppHeader from "../../components/Header";
import { setSector } from "../../redux/Actions/api.action";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
export default List = (props) => {
  const sector = useSelector((state) => state.sector.sector);
  const dispatch = useDispatch();
  const [vias, setVias] = useState(sector.vias || []);
  const [next, setNext] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  useEffect(() => {}, []);
  const onRefresh = () => {
    getSectorById(sector._id)
      .then((result) => {
        console.log(result);
        dispatch(setSector(result));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Detail", (item = { item }));
        }}
        style={{
          marginVertical: "1%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <ListItem
          containerStyle={{
            width: width - 5,
            backgroundColor: theme.colors.active,
            borderRadius: 5,
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.pokeName}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={theme.backgroundImage}
        style={styles.mainContent}
      >
        <AppHeader />
        <FlatList
          data={vias}
          bounces={false}
          renderItem={(item, index) => renderItem(item.item, index)}
          keyExtractor={(item, index) => index}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh()}
            />
          }
        />
      </ImageBackground>
    </View>
  );
};
