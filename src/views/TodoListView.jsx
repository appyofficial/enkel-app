import { useState } from "react";
import { View, ScrollView } from "react-native";
import { Headline, List } from "react-native-paper";
import { TodoItem } from "../components";

export const TodoListView = () => {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "Buy milk",
      isDone: false,
      createdAt: "2020-01-01T00:00:00.000Z",
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    {
      id: "2",
      text: "Finish the todo app which i am trying to build forever",
      isDone: false,
      createdAt: "2020-01-01T00:00:00.000Z",
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
    {
      id: "3",
      text: "Find out how come it was earth suitable for life and if there is anything else out there",
      isDone: false,
      createdAt: "2020-01-01T00:00:00.000Z",
      updatedAt: "2020-01-01T00:00:00.000Z",
    },
  ]);

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
        Tasks ✍️
      </Headline>
      {/*List of to dos  */}
      <ScrollView>
        <List.Section>
          {todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} isDone={todo.isDone} />
          ))}
        </List.Section>
      </ScrollView>
    </View>
  );
};
