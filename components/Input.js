import React from "react";
import { TextInput, StyleSheet } from 'react-native';


const Input = props => {
    //? {...props} allow to add props outside of this component (like from StartGameScreen) where we call this
    return <TextInput {...props} style={{ ...styles.inpu, ...props.style }} />
};

const styles = StyleSheet.create({
    input: {
        hight: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;