import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";
const Title = ({ children }) => {
  return (
    <View style={styles.titleTextContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default Title;
const styles = StyleSheet.create({
  titleTextContainer: {
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 35,
    color: Colors.white,
    textAlign: "center",
  },
});
