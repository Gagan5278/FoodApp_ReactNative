import React from 'react';
import {View, ImageBackground, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform} from 'react-native';
import Colors from '../constants/Colors';
import DefaulText from '../components/DefaultText';
const MealItem = (props) => {
    let TouchableComponent = TouchableOpacity
    if (Platform.OS === 'android') {
        TouchableComponent =  TouchableNativeFeedback
    }
    return (
        <TouchableComponent onPress = { () => props.onPressAction(props.id, props.title)}>
         <View  style = {styleMenu.mainView}>
            <View style =  {styleMenu.imageContainer}>
                <ImageBackground style = {styleMenu.imageStyle} source = {{uri: props.imageUrl}}>
                    <Text style = {styleMenu.textStyle}>{props.title}</Text>
                </ImageBackground>
            </View>
            <View style = {styleMenu.desciptionStyle}>
                <DefaulText style = {styleMenu.descriptionTextStyle}>{props.duration} mins</DefaulText>
                <DefaulText style = {styleMenu.descriptionTextStyle}>{props.affordability}</DefaulText>
                <DefaulText style = {styleMenu.descriptionTextStyle}>{props.complexity}</DefaulText>
            </View>
         </View>
        </TouchableComponent>
    )
}

const styleMenu = StyleSheet.create({
   mainView : {
       height: 170.0,
       backgroundColor: Colors.ascentColor,
       margin: 10,
       borderRadius: 10,
       overflow: 'hidden'
   },
   imageContainer: {
       height: '85%',
       width: '100%',
   },
   imageStyle: {
       height: '100%',
       width:'100%',
       alignItems: 'center',
       justifyContent: 'flex-end'
   },
   textStyle: {
       width: '100%',
       fontFamily: 'OpenSans-Bold',
       fontSize: 16,
       color: 'white',
       backgroundColor: '#666462',
       textAlign : 'center',
       opacity : 0.8,
       paddingVertical : 5.0
   },
   desciptionStyle :{
       height :'15%',
       flexDirection: 'row',
       justifyContent: 'space-around',
       alignItems : 'center'
   },
   descriptionTextStyle: {
       fontSize : 14,
   }
})

export default MealItem;