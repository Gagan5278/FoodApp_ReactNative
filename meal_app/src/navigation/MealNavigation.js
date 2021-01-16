import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import CategoryMealScreen from '../screeens/CategoryMealScreen';
import MealCategoryListScreen from '../screeens/MealCategoryListScreen';
import MealDetialScreen from '../screeens/MealDetialScreen';
import Colors from '../constants/Colors';
import FavoriteMealScreen from '../screeens/FavoriteMealScreen';
import MealFilterScreen from '../screeens/MealFilterScreen';

import { Ionicons } from '@expo/vector-icons';
const stackNavigator = createStackNavigator({
    categoryListScreen: MealCategoryListScreen,
    mealCategory: CategoryMealScreen,
    detailScreen: MealDetialScreen,
}, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTitleStyle : {
            fontFamily : 'OpenSans-Bold',
            color: 'white'
        },
        headerBackTitle : ' '
    }
})

const favouriteNavigationStack = createStackNavigator({
    FavoriteMeal: FavoriteMealScreen,
    detailScreen: MealDetialScreen,
}, 
{
    defaultNavigationOptions: {
        headerTintColor : 'white',
        headerStyle : {
            backgroundColor:  Colors.primaryColor,
        },
        headerBackTitle : ' '
    }
})

let tabBarItems = (
    {
        meals: {
            screen: stackNavigator,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                    return <Ionicons name="restaurant" size={24} color={tabinfo.tintColor} />
                }
            },
            backgroundColor : Colors.primaryColor,

        },
        favourite: {
            screen: favouriteNavigationStack,
            navigationOptions: {
                tabBarIcon: (tabinfo) => {
                    return <Ionicons name="star-outline" size={24} color={tabinfo.tintColor} />
                },
            },
            backgroundColor : Colors.primaryColor
        },
    }
)

const bottomTabBar = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabBarItems, { activeTintColor: Colors.ascentColor, shifting: true }) : createBottomTabNavigator(tabBarItems, {
    tabBarOptions: {
        activeTintColor: Colors.ascentColor,
    }
})

const filterNavigator = createStackNavigator({
    filterScreen: MealFilterScreen,
})

const drawerNavigation = createDrawerNavigator({
    mainTab: {
        screen : bottomTabBar,
        navigationOptions : {
            title : 'Main'
        },
    },
    filterScreenStack: {
        screen : filterNavigator,
        navigationOptions : {
            title : 'Filter'
        }
    }
}, )

 
export default createAppContainer(drawerNavigation);