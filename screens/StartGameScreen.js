import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContaner from "../components/NumberContainer";

const StartGamaScreen = props => {

    //? all input default type is string you have to convert it if you need number
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();


    //? inputText comes from input (onChangeText)
    const numberInputHandler = inputText => {
        //? setEntereddValue(inputText) <-- this is normaly , but we need to validate first now 
        //? here we use regular Exprestion ( /[^0-9]/g, '' )--> replace any thing not number with '' 
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {

            Alert.alert('invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okey', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }

        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>You selected </Text>
                <NumberContaner>{selectedNumber}</NumberContaner>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screenStyle}>
                <Text style={styles.title}>Start a New Game !</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                        blureOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.secondary} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                    </View>

                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 10,
        alignItems: 'center'

    },
    title: {
        fontSize: 20,
        marginVertical: 10,


    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: "row",
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },
    button: {
        width: 100
    },
    input: {
        width: 90,
        textAlign: 'center',
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }

});

export default StartGamaScreen;