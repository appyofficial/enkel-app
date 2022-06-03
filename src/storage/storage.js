import AsyncStorage from "@react-native-async-storage/async-storage";

import handleError from "./handle-error";

class SyncStorage {
  data = new Map();

  loading = true;

  init() {
    return AsyncStorage.getAllKeys().then((keys) =>
      AsyncStorage.multiGet(keys).then((data) => {
        data.forEach(this.saveItem.bind(this));

        return [...this.data];
      })
    );
  }

  get(key) {
    return this.data.get(key);
  }

  set(key, value) {
    if (!key) return handleError("set", "a key");

    this.data.set(key, value);
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    if (!key) return handleError("remove", "a key");

    this.data.delete(key);
    return AsyncStorage.removeItem(key);
  }

  saveItem(item) {
    let value;

    try {
      value = JSON.parse(item[1]);
    } catch (e) {
      [, value] = item;
    }

    this.data.set(item[0], value);
    this.loading = false;
  }

  getAllKeys() {
    return Array.from(this.data.keys());
  }
}

export const localStorage = new SyncStorage();
