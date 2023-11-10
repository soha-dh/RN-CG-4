// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGamaScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);


  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setguessRounds(0);
  };


  const GameOverHandler = numberOfRounds => {
    setguessRounds(numberOfRounds);
  };


  let content = <StartGamaScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess A Number" />
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
