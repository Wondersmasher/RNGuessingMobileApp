import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../utilities/Colors";

const PrimaryButtons = ({ children, onPress, style }) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.primary2 }}
        style={({ pressed }) =>
          pressed ? [styles.pressable, styles.pressed] : styles.pressable
        }
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButtons;
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary1,
    borderRadius: 28,
    elevation: 2,
    shadowColor: Colors.primary1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    flex: 1,
    margin: 5,
    overflow: "hidden",
  },
  pressable: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pressed: { opacity: 0.95 },
  button: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
});
