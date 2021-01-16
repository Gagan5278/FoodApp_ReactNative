import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import NavigationHeaderButton from '../components/NavigationHeaderButton';
import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { favouriteToggle } from '../store/actions/favouriteToggle';

const MealDetialScreen = (props) => {
    const { navigation } = props;
    const selectedID = props.navigation.getParam('mealID');
    const allMeals = useSelector(state => (state.meals.allMeals));
    const titleName = allMeals.find(meal => meal.id === selectedID);
    // const useDispatchConst = useDispatch();

    // const toogleFavourite = useCallback(() => {
    //     console.log('CALLEED FOR ID');
    //     useDispatchConst(favouriteToggle(selectedID));
    // },[]);

    // useEffect(() => {
    //     console.log('CALLEED useEffect ID');
    //     navigation.setParams({ dispatch: toogleFavourite });
    // }, [toogleFavourite]);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        console.log('CALLEED FOR ID');
      dispatch(favouriteToggle(selectedID));
    }, [dispatch, selectedID]);
  
    useEffect(() => {
        console.log('useEffect FOR ID');
      // props.navigation.setParams({ mealTitle: selectedMeal.title });
      props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    return (
        <View style={styleSheet.viewStyle}>
            <ScrollView>
                <Image source={{ uri: titleName.imageUrl }} style={styleSheet.imageStyle} />
                <View style={styleSheet.viewRow}>
                    <DefaultText style={styleSheet.defaultTextStyle}>{titleName.affordability}</DefaultText>
                    <DefaultText style={styleSheet.defaultTextStyle}>{titleName.complexity}</DefaultText>
                    <DefaultText style={styleSheet.defaultTextStyle}>{titleName.duration} mins</DefaultText>
                </View>
                <DefaultText style={styleSheet.headerTitleStyle}>Ingrdients</DefaultText>
                {titleName.ingredients.map((item) =>
                    <View key={item} style={styleSheet.containerStyle}>
                        <DefaultText style={styleSheet.defaultTextStyle}>{item}</DefaultText>
                    </View>
                )}
                <DefaultText style={styleSheet.headerTitleStyle}>Steps</DefaultText>
                {titleName.steps.map((item) =>
                    <View key={item} style={styleSheet.containerStyle}>
                        <DefaultText style={styleSheet.defaultTextStyle}>{item}</DefaultText>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

MealDetialScreen.navigationOptions = (navigationData) => {
    const titleName = navigationData.navigation.getParam('titleName');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    return {
        headerTitle: titleName,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={NavigationHeaderButton} >
            <Item title='Fav' iconName='star-outline' onPress={() => { toggleFavorite() }}></Item>
        </HeaderButtons>)
    }
}

const styleSheet = StyleSheet.create({
    viewStyle: {
        flex: 1,
    },
    imageStyle: {
        width: '100%',
        height: Dimensions.get('window').height / 3.0,
    },
    viewRow: {
        padding: 10,
        backgroundColor: Colors.ascentColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerTitleStyle: {
        padding: 10,
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    defaultTextStyle: {
        fontSize: 16,
        color: Colors.textColor,
    },
    containerStyle: {
        padding: 15,
        margin: 2,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1.0
    }
})

export default MealDetialScreen;