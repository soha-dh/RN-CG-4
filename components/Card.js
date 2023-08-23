import React from "react";
import { View, StyleSheet } from 'react-native';


const Card = props => {
    //* 04-08
    //? the mean of props.children is Any content

    //| this is how we merge the 2 styles of components --> style={{...styles.cardStyle, ...props.style}
    return <View style={{ ...styles.cardStyle, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    cardStyle: {

        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;