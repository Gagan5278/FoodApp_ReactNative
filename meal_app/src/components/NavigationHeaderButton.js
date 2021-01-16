import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
const NavigationHeaderButton = (props) => {
    return <HeaderButton {...props} iconSize = {24} IconComponent = {Ionicons} color = {Colors.ascentColor}/>
}

export default NavigationHeaderButton;