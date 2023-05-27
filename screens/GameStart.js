import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";
import PrimaryButtons from "../components/PrimaryButtons";
const GameStart = ({ currentGuess, handleReduceOrAddGuessedNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Opponent's Guess</Text>
      </View>
      <View style={styles.titleGuessedTextContainer}>
        <Text style={styles.titleGuessedText}>{currentGuess}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButtons
          onPress={() => handleReduceOrAddGuessedNumber("Reduce")}
        >
          -
        </PrimaryButtons>
        <PrimaryButtons
          onPress={() => handleReduceOrAddGuessedNumber("Increase")}
        >
          +
        </PrimaryButtons>
      </View>
    </View>
  );
};

export default GameStart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
    marginTop: 60,
  },
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

  titleGuessedTextContainer: {
    borderColor: Colors.accent1,
    borderWidth: 4,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  titleGuessedText: {
    fontSize: 36,
    color: Colors.accent1,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
