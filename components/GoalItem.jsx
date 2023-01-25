import React, { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "red",
    color: "#fff",
    borderColor: "#fff",
    borderWidth: 1,
  },
  goalText: {
    color: "#fff",
  },
});
