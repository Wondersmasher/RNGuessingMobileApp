import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import Colors from "./utilities/Colors";
import { useEffect, useState } from "react";
import GameStart from "./screens/GameStart";
import { LinearGradient } from "expo-linear-gradient";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let min = 1;
let max = 100;
export default function App() {
  const initialGuess = generateRandomBetween(min, max, +enteredNumber);

  const [enteredNumber, setEnteredNumber] = useState("");
  const [screenState, setScreenState] = useState("NewGame");
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [isGameOver, setIsGameOver] = useState(false);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const choosenNumber = parseInt(enteredNumber);
  const [guessesArray, setGuessesArray] = useState([initialGuess]);

  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    setNumberOfGuesses(1);
  }, []);
  useEffect(() => {
    if (choosenNumber === currentGuess) {
      setIsGameOver(true);
    }
  }, [choosenNumber, currentGuess]);

  const handleEnteredNumberChange = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const confirmChoosenNumber = () => {
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // ("You have to input a number between 1 and 99. Try putting another number");
      Alert.alert(
        "Invalid Input",
        "You have to input a number between 1 and 99. Try putting another number"
      );
      setEnteredNumber("");
      return;
    }
    setScreenState("GameStartPage");
  };
  const handleReduceOrAddGuessedNumber = (pressedCase) => {
    if (
      (pressedCase === "Reduce" && currentGuess < choosenNumber) ||
      (pressedCase === "Increase" && currentGuess > choosenNumber)
    ) {
      Alert.alert(
        "You need not to lie",
        "Can you just be honest for once and give the correct hint"
      );
      return;
    }
    if (pressedCase === "Reduce") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    // console.log(min, max);
    // console.log(screenState);
    const guessNewRandomNumber = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(guessNewRandomNumber);
    setNumberOfGuesses((prev) => prev + 1);
    setGuessesArray((prev) => [guessNewRandomNumber, ...prev]);
  };

  const resetNumber = () => {
    setEnteredNumber("");
  };

  const restartGame = () => {
    const newGuess = generateRandomBetween(1, 100, 0);
    setEnteredNumber("");
    setIsGameOver(false);
    setNumberOfGuesses(0);
    setCurrentGuess(newGuess);
    setGuessesArray([newGuess]);
    setScreenState("NewGame");
    min = 1;
    max = 100;
  };

  let screen;
  if (screenState === "NewGame") {
    screen = fontsLoaded && (
      <StartGame
        enteredNumber={enteredNumber}
        handleEnteredNumberChange={handleEnteredNumberChange}
        resetNumber={resetNumber}
        confirmChoosenNumber={confirmChoosenNumber}
      />
    );
  }

  if (screenState === "GameStartPage") {
    screen = (
      <GameStart
        currentGuess={currentGuess}
        handleReduceOrAddGuessedNumber={handleReduceOrAddGuessedNumber}
        guessesArray={guessesArray}
      />
    );
  }
  if (isGameOver) {
    screen = (
      <GameOver
        enteredNumber={enteredNumber}
        numberOfGuesses={numberOfGuesses}
        restartGame={restartGame}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.primary3, Colors.accent1]}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.25,
  },
});
/*
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
} */
