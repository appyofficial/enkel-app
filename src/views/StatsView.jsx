import React from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";

export const StatsView = () => {
  return (
    <View style={{ paddingHorizontal: 15, backgroundColor: "white", flex: 1 }}>
      <Headline
        style={{
          fontWeight: "bold",
          fontSize: 36,
          marginVertical: 20,
          padding: 10,
        }}
      >
        Stats 😱
      </Headline>
      {/*List of cards with stats  */}
    </View>
  );
};
