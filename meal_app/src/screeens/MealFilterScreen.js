import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import NavigationHeaderButton from '../components/NavigationHeaderButton';
import DefaulText from '../components/DefaultText';
import  Colors  from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { filteredItems } from '../store/actions/favouriteToggle';


const SwitchView = (props) => {
    return (
        <View style = {styleSheet.viewStyle}>         
        <Text>  {props.title} </Text>
        <Switch trackColor = {{true : Colors.primaryColor}} value = {props.currentValue} onValueChange = {props.onChangeCall}/>
      </View>
    )
}
const MealFilterScreen = (props) => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLuctosFree, setIsLuctosFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);
    const useDispatchObject = useDispatch()

    const saveFilters =  useCallback(() => {
        const filteredItem = ({
            GlutenFree : isGlutenFree,
            LuctosFree: isLuctosFree,
            Vegan: isVegan,
            Vegeterian: isVegeterian
        })

        useDispatchObject(filteredItems(filteredItem))
    },[isGlutenFree, isLuctosFree, isVegan, isVegeterian]);

    useEffect( () => {
        navigation.setParams({save: saveFilters});
    },[saveFilters]);

    return (
        <View style={styleSheet.containerStyle}>
            <DefaulText style = {styleSheet.headerStyle}>Set your filters</DefaulText>
            <SwitchView title = 'Is Gluten Free' currentValue = {isGlutenFree} onChangeCall = {nValue => setIsGlutenFree(nValue)}/>
            <SwitchView title = 'Is Luctos Free' currentValue = {isLuctosFree} onChangeCall = {nValue => setIsLuctosFree(nValue)}/>
            <SwitchView title = 'Is Vegan' currentValue = {isVegan} onChangeCall = {nValue => setIsVegan(nValue)}/>
            <SwitchView title = 'Is Vegeterian' currentValue = {isVegeterian} onChangeCall = {nValue => setIsVegeterian(nValue)}/>
        </View>
    )
}

MealFilterScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={NavigationHeaderButton}>
            <Item iconName='apps-outline' iconSize={24} onPress={() => navigationData.navigation.toggleDrawer()} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent = {NavigationHeaderButton}>
            <Item iconName='ios-save' iconSize={24} onPress={navigationData.navigation.getParam('save')} />
        </HeaderButtons>
    }
}

const styleSheet = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    viewStyle: {
        margin: 10,
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'
    },
    headerStyle: {
        marginVertical: 10,
        fontSize : 24,
        color : 'black',
        textAlign: 'center'
    }
})
export default MealFilterScreen;