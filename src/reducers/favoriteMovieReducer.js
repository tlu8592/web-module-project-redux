import movies from './../data.js';

const initialState = {
    favorites: movies,
    displayFavorites: true
}

const favoriteMovieReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default favoriteMovieReducer;