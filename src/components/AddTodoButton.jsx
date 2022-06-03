import React, { useRef } from "react";
import { StyleSheet, Text } from "react-native";
import { FAB } from "react-native-paper";
import { localStorage } from "../storage";
import RBSheet from "react-native-raw-bottom-sheet";

export const AddTodoButton = () => {
  const refRBSheet = useRef();
  return (
    <>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          refRBSheet.current.open();
        }}
      />
      <RBSheet
        ref={refRBSheet}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Text>Oops!</Text>
      </RBSheet>
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 60,
  },
});
