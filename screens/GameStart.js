import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../utilities/Colors";
import PrimaryButtons from "../components/PrimaryButtons";
import Title from "../components/Title";
import Container from "../components/Container";
const GameStart = ({ currentGuess, handleReduceOrAddGuessedNumber }) => {
  return (
    <Container>
      <Title>Opponent's Guess</Title>
      <View style={styles.titleGuessedTextContainer}>
        <Text style={styles.titleGuessedText}>{currentGuess}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButtons
          onPress={() => handleReduceOrAddGuessedNumber("Reduce")}
        >
          <Ionicons name="md-remove" size={24} color="white" />
        </PrimaryButtons>
        <PrimaryButtons
          onPress={() => handleReduceOrAddGuessedNumber("Increase")}
        >
          <Ionicons name="md-add" size={24} color="white" />
        </PrimaryButtons>
      </View>
    </Container>
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
