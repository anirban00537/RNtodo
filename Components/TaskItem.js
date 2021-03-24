import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskItem({ text }) {
  return (
    <View style={styles.TaskItemcontainer}>
      <View style={styles.firstsection}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  TaskItemcontainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 4,
    marginBottom: 10,
  },
  firstsection: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    flexWrap: "wrap",
  },
  text: {
    color: "#7f8c8d",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  square: {
    height: 24,
    width: 24,
    backgroundColor: "#3498db",
    borderRadius: 6,
    opacity: 0.6,
  },
  circle: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "#95a5a6",
    borderRadius: 40,
    marginRight: 10,
  },
});
