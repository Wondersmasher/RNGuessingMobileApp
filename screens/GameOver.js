import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Container from "../components/Container";
import Colors from "../utilities/Colors";
import PrimaryButtons from "../components/PrimaryButtons";

const GameOver = ({ enteredNumber, numberOfGuesses, restartGame }) => {
  return (
    <Container>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your Phone needed{" "}
          <Text style={styles.highlight}>{numberOfGuesses}</Text> times to get
          the number <Text style={styles.highlight}>{enteredNumber}</Text>
        </Text>
      </View>
      <PrimaryButtons onPress={restartGame} style={styles.button}>
        New Game
      </PrimaryButtons>
    </Container>
  );
};

export default GameOver;
const styles = StyleSheet.create({
  summaryText: {
    fontFamily: "open-sans-regular",
    color: Colors.white,
    textAlign: "center",
    fontSize: 25,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary4,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
  },
  button: { flex: 0, marginTop: 40 },
});
