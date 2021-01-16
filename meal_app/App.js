import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MealNavigation from './src/navigation/MealNavigation';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import MealReducers from './src/store/reducers/MealReducers'


const rootReducer = combineReducers({
  meals: MealReducers
});

const store = createStore(rootReducer);

const fetchAvailableFonts = () => {
  Font.loadAsync({
    'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
    'OpenSans-Regular': require('./assets/Fonts/OpenSans-Regular.ttf'),
  })
};



export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  if (!isAppLoaded) {
    return (
      <AppLoading startAsync={fetchAvailableFonts} onFinish={() => setIsAppLoaded(true)} onError={() => { console.log('An Error occured while fetching fonts') }} />
    )
  }
  return (<Provider store={store}><MealNavigation><StatusBar style='light' /></MealNavigation></Provider>
  );
}

