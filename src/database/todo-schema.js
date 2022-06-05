import Realm from "realm";

class Todos extends Realm.Object {}

Todos.schema = {
  name: "Todos",
  primaryKey: "id",
  properties: {
    id: "int",
    title: "string",
    completed: "bool",
    createdAt: "date",
    completedAt: "date?",
    updatedAt: "date?",
    reminder: "date?",
    notes: "string?",
    isImportant: "bool?",
  },
};

export default new Realm({ schema: [Todos] });
