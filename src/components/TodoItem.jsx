import React, { useState } from "react";
import { List, Divider } from "react-native-paper";

export const TodoItem = ({ text, isDone }) => {
  const [isDoneState, setIsDone] = useState(isDone);
  const icon = isDoneState ? "checkbox-marked-circle" : "circle-outline";
  const iconColor = isDoneState ? "green" : "blue";

  const handlePress = () => {
    setIsDone(!isDoneState);
  };

  return (
    <>
      <List.Item
        titleNumberOfLines={100}
        onPress={handlePress}
        title={text}
        titleStyle={{
          textDecorationLine: isDoneState ? "line-through" : "none",
          fontSize: 18,
        }}
        left={(props) => <List.Icon {...props} icon={icon} color={iconColor} />}
      />
      <Divider />
    </>
  );
};
