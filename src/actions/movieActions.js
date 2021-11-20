export const ADD_MOVIE = "ADD_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";

export const addMovie = (formValuesObj) => {
    return ({ type: ADD_MOVIE, payload: formValuesObj });
}

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}