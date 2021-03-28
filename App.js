import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TaskItem from "./Components/TaskItem";
export default function App() {
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);
  const structListFunc = () => {
    setList([...list, text]);
    console.log(text);
    setText("");
  };
  const onComplete = (index) => {
    let itemCopy = [...list];
    itemCopy.splice(index, 1);
    setList(itemCopy);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Tasks</Text>

      {list.map((t, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => onComplete(index)}>
            <TaskItem text={t} />
          </TouchableOpacity>
        );
      })}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={(txt) => setText(txt)}
          placeholder={"Write a Task"}
        />

        <TouchableOpacity onPress={() => structListFunc()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#34495e",
    margin: 30,
  },
  writeTaskWrapper: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-evenly",
    bottom: 30,
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  addWrapper: {
    height: 40,
    width: "100%",
    backgroundColor: "#3498db",
    paddingHorizontal: 10,
    justifyContent: "center",
    borderRadius: 20,
  },
  addText: {
    color: "#fff",
  },
});
