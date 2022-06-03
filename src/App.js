import React, { useEffect } from "react";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView, Platform } from "react-native";
import {
  Provider as PaperProvider,
  BottomNavigation,
} from "react-native-paper";
import { AddTodoButton } from "./components";
import { TodoListView, StatsView } from "./views";
import { theme } from "./theme";
import { localStorage } from "./storage";

const TodoListRoute = () => <TodoListView />;
const StatsRoute = () => <StatsView />;

const checkLocalStorage = async () => {
  await localStorage.init();
  const todos = localStorage.get("todos");
  const stats = localStorage.get("stats");
  if (todos && stats) {
    return;
  }

  console.log(todos, stats);
};

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "todo", title: "Todo", icon: "note-edit" },
    { key: "stats", title: "Stats", icon: "chart-bar" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    todo: TodoListRoute,
    stats: StatsRoute,
  });

  useEffect(() => {
    checkLocalStorage();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
          />
          <AddTodoButton />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  container: {
    flex: 1,
  },
});

export default registerRootComponent(App);
