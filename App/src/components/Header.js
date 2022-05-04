import {} from "react-native";
import React from "react";
import { Header } from "react-native-elements";
import { theme } from "../services/constants";

export default function AppHeader() {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#571B0F" }}
      centerComponent={{
        text: "Escaladores La Rioja",
        style: { color: "#efc230", fontWeight: "bold", fontSize: 18 },
      }}
      rightComponent={{ icon: "home", color: "#571B0F" }}
      style={theme.header}
      backgroundColor="#E2725B"
    />
  );
}
