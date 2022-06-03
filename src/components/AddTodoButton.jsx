import React, { useRef, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { FAB, Headline, TextInput, Button } from "react-native-paper";
import { localStorage } from "../storage";
import RBSheet from "react-native-raw-bottom-sheet";
import uuid from "react-native-uuid";

export const AddTodoButton = () => {
  const refRBSheet = useRef();
  const [task, setTask] = useState("");

  const onSave = () => {
    const alltasks = localStorage.get("todos");
    const newTask = [
      {
        id: uuid.v4(),
        text: task,
        isDone: false,
        createdAt: new Date().toISOString(),
        completedAt: null,
      },
    ];
    const updatedTask = newTask.concat(alltasks);
    localStorage.set("todos", [...updatedTask]);
    console.log("local", alltasks);
    refRBSheet.current.close();
    setTask("");
  };

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
        customStyles={styles.rbsheetCustomStyles}
      >
        <Headline style={styles.rbsheetHeadline}>Add a task</Headline>
        <TextInput
          value={task}
          onChangeText={(task) => setTask(task)}
          multiline
          style={styles.rbsheetInputField}
        />
        <Button
          mode="contained"
          onPress={onSave}
          style={styles.rbsheetButton}
          disabled={task.length < 2 ? true : false}
        >
          <Text style={styles.rbsheetButtonText}>Save</Text>
        </Button>
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
  rbsheetCustomStyles: {
    container: {
      padding: 15,
    },
  },
  rbsheetHeadline: {
    fontWeight: "bold",
    fontSize: 32,
    marginVertical: 20,
    padding: 10,
  },
  rbsheetInputField: { marginBottom: 30 },
  rbsheetButton: { padding: 12, borderRadius: 100 },
  rbsheetButtonText: { fontSize: 16 },
});
