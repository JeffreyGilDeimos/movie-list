const initialState = {};

const updateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETUP_UPDATE_MOVIE':
            return state = action.payload;
        case 'SAVE_UPDATE_MOVIE':
            return state = {};
        default:
            return state;
    }
}

export default updateReducer;