export const addMovie = (newMovie) => {
    return (dispatch) => {
        dispatch ({
            type: 'ADD_MOVIE',
            payload: newMovie
        }) 
    }
    }

    export const removeMovie = (id) => {
        return (dispatch) => {
            dispatch({
                type : 'REMOVE_MOVIE',
                payload: id 
            })
        }
    }