import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoriteMovieReducer';

export default combineReducers({
    movie: movieReducer,
    favorite: favoritesReducer
});