import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is the Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
