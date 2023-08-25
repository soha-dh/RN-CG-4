import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";

const StartGamaScreen = props => {

    //? all input default type is string you have to convert it if you need number
    const [enteredValue, setEnteredValue] = useState('');

    //? inputText comes from input (onChangeText)
    const numberInputHandler = inputText => {
        //? setEntereddValue(inputText) <-- this is normaly , but we need to validate first now 
        //? here we use regular Exprestion ( /[^0-9]/g, '' )--> replace any thing not number with '' 
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));

    };

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
                        <View style={styles.button}><Button title="Reset" onPress={() => { }} color={Colors.secondary} /></View>
                        <View style={styles.button}><Button title="Confirm" onPress={() => { }} color={Colors.primary} /></View>
                    </View>

                </Card>
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
    }

});

export default StartGamaScreen;