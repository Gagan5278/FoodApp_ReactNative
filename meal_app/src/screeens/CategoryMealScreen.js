import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/CategoryData';
import MealItem from '../components/MealItem'
const CategoryMealScreen = (props) => {

    const allMeals = useSelector(state => (state.meals.filterMeal))
    const selectedID = props.navigation.getParam('mealID')
    const itemFetched = allMeals.filter((item) => item.categoryIds.indexOf(selectedID) >= 0)
    const itemRenderer = (renderItem) => {
        return (
            <MealItem onPressAction={onPressMenuAction} id={renderItem.item.id} imageUrl={renderItem.item.imageUrl} complexity={renderItem.item.complexity} title={renderItem.item.title} duration={renderItem.item.duration} affordability={renderItem.item.affordability} />
        )
    }

    const onPressMenuAction = (value, title) => {
        props.navigation.navigate('detailScreen', params = { 'mealID': value, 'titleName': title })
    }

    return (
        <FlatList data={itemFetched} keyExtractor={(item, index) => item.id} renderItem={itemRenderer} />
    )
}



CategoryMealScreen.navigationOptions = navigationData => {
    const selectedID = navigationData.navigation.getParam('mealID')
    const itemSelected = CATEGORIES.find((data) => data.id === selectedID)
    return {
        headerTitle: itemSelected.title
    }
}

const styleSheet = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoryMealScreen;