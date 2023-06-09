import React from "react";
import { View, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    marginTop: 60,
  },
});
