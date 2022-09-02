const initialState = [];

const reducerMovie = (state = initialState, action) => {
    switch (action.type) {
            case 'ADD_MOVIE':
                return [action.payload, ...state]
             case 'REMOVE_MOVIE':
                return [...state].filter((Movie) => Movie.id !== action.payload);
             case 'SAVE_UPDATE_MOVIE':
                return state = [...state].map((item) => item.id === action.payload.id ? action.payload : item);
            default:
                return state;
    }
}

export default reducerMovie;