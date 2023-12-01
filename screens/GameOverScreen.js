import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import defaultStyles from "../constants/default-styles";


const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text style={defaultStyles.title}>The Game is Over !</Text>

            <Image source={require('../assets/success.png')} />
            <Text style={defaultStyles.title}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={defaultStyles.title}>Number was: {props.userNumber}</Text>

            <Button title="NEW GAME" onPress={props.onRestart} />

        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }

});

export default GameOverScreen;