import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Building an app mf!!!!</Text>
      </View>
      <Text>YEsssssir</Text>
      <Button title="Tap my cute ass" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  para: {
    textAlign: "center",
    fontSize: "50px",
    color: "red",
  },
});
