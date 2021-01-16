import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaulText = (props) => {
    return (
        <Text style = {{...styleSheet.textStyle, ...props.style}}> {props.children}</Text>
    );
}

const styleSheet = StyleSheet.create({
    textStyle : {
        fontFamily : 'OpenSans-Regular',
        fontSize: 12,
        color: 'white',
    }
})


export default DefaulText;