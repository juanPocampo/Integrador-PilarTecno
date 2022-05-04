import React, { Component, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../routes/app";
import { Provider, useDispatch } from "react-redux";
//import { store } from "../store";
import { store } from "../redux/store";
import { hasLocationPermission } from "../services/LocationPermissions";
import { allSectores } from "../redux/Actions/api.action";

export default App = () => {
  useEffect(() => {
    hasLocationPermission();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};
