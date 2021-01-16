export const FAVOURITE_TOGGLE = 'FAVOURITE_TOGGLE';
export const FILTERED_ITEMS = "FILTERED_ITEMS";


export const favouriteToggle = (id) => {
    return {type: FAVOURITE_TOGGLE, mealID: id};
};

export const filteredItems = (appliedFiltrs) => {
    return {type: FILTERED_ITEMS, filters: appliedFiltrs};
}
