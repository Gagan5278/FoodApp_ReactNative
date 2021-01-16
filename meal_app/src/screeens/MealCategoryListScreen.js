import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';
import  { CATEGORIES }  from '../data/CategoryData';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import NavigationHeaderButton from '../components/NavigationHeaderButton';
import  GridItems from '../components/GridItems'

const MealCategoryListScreen = (props)  => {

    const renderListItem = (object) => {
       return (
           <GridItems item = {object.item} onPress =  {onPressActions}/>
       )
    }

    const onPressActions = (value) => {
        props.navigation.navigate('mealCategory', params = {'mealID': value.id})
    }

    return(
        <FlatList 
            keyExtractor = { (item, index) => item.id} 
            numColumns = {2} data = {CATEGORIES} 
            renderItem = {renderListItem}
        />
    )
}

MealCategoryListScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Categories',
        headerLeft: () =>  <HeaderButtons HeaderButtonComponent = {NavigationHeaderButton}>
            <Item  iconName = 'apps-outline' color = 'white' iconSize  = {24} onPress = { () => navigationData.navigation.toggleDrawer()}/>
        </HeaderButtons>
    }
}

const styleSheet = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
        padding : 50
    }
 })

export default MealCategoryListScreen;