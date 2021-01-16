import { Meals } from '../../data/CategoryData';
import { FAVOURITE_TOGGLE, FILTERED_ITEMS } from '../actions/favouriteToggle';
const initialState = {
    allMeals: Meals,
    filterMeal: Meals,
    favourite: [],
};

const MealReducers = (state = initialState, action) => {
    switch (action.type) {
        case FAVOURITE_TOGGLE:
            const indexExisting = state.favourite.findIndex(meal => meal.id === action.mealID)
            if (indexExisting >= 0) {
                const updatedFavMeals = [...state.favourite];
                updatedFavMeals.splice(indexExisting, 1);
                return { ...state, favourite: updatedFavMeals };
            }
            else {
                const findObject = state.allMeals.find(meal => meal.id === action.mealID)
                return { ...state, favourite: state.favourite.concat(findObject) };
            }
            break;
        case FILTERED_ITEMS:
            const updatedFilteredItems = state.allMeals.filter(meal => {
                if (!meal.isGlutenFree && action.filters.GlutenFree) {
                    return false;
                }
                if (!meal.isLactoseFree && action.filters.LuctosFree) {
                    return false;
                } if (!meal.isVegan && action.filters.Vegan) {
                    return false;
                } if (!meal.isVegetarian && action.filters.Vegeterian) {
                    return false;
                }
                return true;
            })
            console.log('Before applied : ' + action.filters.LuctosFree);

            console.log('Filtered applied : ' + updatedFilteredItems.length);
            return { ...state, filterMeal: updatedFilteredItems };
            break;
        default:
            return state;
            break;
    }
};

export default MealReducers;


/*

            GlutenFree : isGlutenFree,
            LuctosFree: isLuctosFree,
            Vegan: isVegan,
            Vegeterian: isVegeterian

*/