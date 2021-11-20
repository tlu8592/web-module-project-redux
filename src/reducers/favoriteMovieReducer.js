import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE } from '../actions/favoritesActions.js';
import movies from './../data.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            const newFavorite = action.payload
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    newFavorite
                ]
            };
        case REMOVE_FAVORITE: 
            return {
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoritesReducer;