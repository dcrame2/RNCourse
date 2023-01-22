import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.para}>Building an app mf!!!!</Text>
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
    padding: 16,
    borderColor: "red",
    borderWidth: 2,
  },
});
