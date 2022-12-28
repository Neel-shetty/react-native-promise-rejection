import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [data, setData] = useState();

  function onPress() {
    fetch("https://randomuser.me/api/idk")
      .then((response) => response.json())
      .then((data) => {
        // Use the data from the server here
        setData(JSON.stringify(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Button title="Load data" onPress={onPress} />
      <Text>{data}</Text>
    </View>
  );
}
