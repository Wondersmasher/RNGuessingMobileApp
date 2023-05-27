import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import Colors from "../utilities/Colors";
const StartGame = ({
  enteredNumber,
  handleEnteredNumberChange,
  resetNumber,
  confirmChoosenNumber,
}) => {
  console.log("yayyyyyyy");
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          autoCapitalize="none"
          onChangeText={handleEnteredNumberChange}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButtons onPress={resetNumber}>Reset</PrimaryButtons>
        <PrimaryButtons onPress={confirmChoosenNumber}>Confirm</PrimaryButtons>
      </View>
    </View>
  );
};

export default StartGame;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary3,
    borderRadius: 10,
    padding: 20,
    margin: 20,
    marginTop: 100,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent1,
    width: 50,
    color: Colors.accent1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 5,
    margin: 20,
    fontSize: 35,
    fontFamily: "open-sans-bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
