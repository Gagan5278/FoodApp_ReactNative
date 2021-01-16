import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';
import DefaultText from '../components/DefaultText';

const FavoriteMealScreen = (props)  => {
    const allMeals = useSelector(state => (state.meals.favourite))

    const itemFetched = allMeals
    console.log(itemFetched);
    const itemRenderer = (renderItem) => {
        return (
            <MealItem onPressAction={onPressMenuAction} id={renderItem.item.id} imageUrl={renderItem.item.imageUrl} complexity={renderItem.item.complexity} title={renderItem.item.title} duration={renderItem.item.duration} affordability={renderItem.item.affordability} />
        )
    }

    const onPressMenuAction = (value, title) => {
        props.navigation.navigate('detailScreen', params = { 'mealID': value, 'titleName': title })
    }

    if (itemFetched.length == 0) {
        return (
            <View style =  {styleSheet.viewStyle}>
                <DefaultText style =  {styleSheet.textStyle}>Add some favourite foods</DefaultText>
            </View>
        )
    }
    return (
        <FlatList data={itemFetched} keyExtractor={(item, index) => item.id} renderItem={itemRenderer} />
    )
}

FavoriteMealScreen.navigationOptions = {
    headerTitle: 'Favourite'
}

const styleSheet = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        color: 'black',
        fontSize: 20
    }
})

export default FavoriteMealScreen;