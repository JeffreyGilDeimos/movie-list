export const setUpdateMovie = (Movie) => {
    return (dispatch) => {
        dispatch({
            type: "SETUP_UPDATE_MOVIE",
            payload: Movie
        })
    }
}

export const saveUpdateMovie = (updatedMovie) => {
    return (dispatch) => {
        dispatch({
            type: "SAVE_UPDATE_MOVIE",
            payload: updatedMovie
        })
    }
}