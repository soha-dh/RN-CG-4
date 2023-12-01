// import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { AppLoading } from 'expo';

import Header from './components/Header';
import StartGamaScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';



// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
//   });
// }
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);
  // const [dataLoaded, setDataLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSansRegular.ttf'),
    'OpenSansBold': require('./assets/fonts/OpenSansBold.ttf'),
    'SmoochRegular': require('./assets/fonts/SmoochRegular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  // if (!dataLoaded) {
  //   return <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(err) => console.log(err)} />;
  // }

  const configerNewGameHandler = () => {
    setguessRounds(0);
    setUserNumber(null);

  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);

  };


  const GameOverHandler = numberOfRounds => {
    setguessRounds(numberOfRounds);
  };


  let content = <StartGamaScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={GameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configerNewGameHandler} />;
  }


  return (
    <View style={styles.screen} onLayout={onLayoutRootView} >
      <Header title="Guess A Number" />
      <Text style={{ fontFamily: 'SmoochRegular', fontSize: 30, color: '#000' }}>Inter Black</Text>
      {content}

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
