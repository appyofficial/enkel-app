import { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Headline, List } from "react-native-paper";
import { TodoItem } from "../components";
import { localStorage } from "../storage";

export const TodoListView = () => {
  const alltasks = async () => {
    const data = await localStorage.get("todos");
    return data;
  };

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    alltasks().then((data) => {
      setTodos(data);
      setIsLoading(false);
    });
  }, [todos]);

  return (
    <View style={styles.viewContainer}>
      <Headline style={styles.headline}>Tasks ✍️</Headline>
      {/*List of to dos  */}
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <List.Section>
            {todos &&
              todos.length > 0 &&
              todos?.map((todo) => (
                <TodoItem key={todo.id} text={todo.text} isDone={todo.isDone} />
              ))}
          </List.Section>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: { paddingHorizontal: 15, backgroundColor: "white", flex: 1 },
  headline: {
    fontWeight: "bold",
    fontSize: 36,
    marginVertical: 20,
    padding: 10,
  },
});
