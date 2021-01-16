import React from 'react';
import {TouchableOpacity,View, Text, StyleSheet, TouchableNativeFeedback, Platform } from  'react-native';

const GridItems = (props) => {
    let TouchableComp = TouchableOpacity
    if (Platform.OS === 'android') {
        TouchableComp =  TouchableNativeFeedback;
    }
    return (
        <TouchableComp style = {styleSheet.viewStyle} onPress = { () => props.onPress(props.item) }>
        <View style = {{...styleSheet.containerStyle, ...{backgroundColor: props.item.color}}}>
           <Text  style = {styleSheet.textStyle}  numberOfLines = {2}> {props.item.title} </Text>
         </View> 
     </TouchableComp>
    )
}

const styleSheet = StyleSheet.create({
    viewStyle: {
        flex: 1,
        margin: 10,
        height : 150.0,
    },
    textStyle: {
        textAlign: 'right',
        padding: 10,
        fontFamily: 'OpenSans-Regular',
        fontSize: 18.0
    },
    containerStyle: {
        flex: 1,
        alignItems : 'flex-end',
        justifyContent: 'flex-end',
        borderRadius : 10.0,
        shadowColor: 'black',
        shadowRadius : 0.50,
        shadowOpacity : 1.0,
        shadowOffset: {height : 1.0, width: 1.0},
        elevation: 3.0
    }
 })

 export default GridItems;