const initialState = {
    users: [],
    loggedUser: null
};

function userReducer(state = initialState, action) {
    switch(action.type) {
        case 'USERS_RECEIVED':
            return {
                ...state,
                users: action.data
            };
        case 'USER_LOGGED_OUT':
            return {
                ...state,
                loggedUser: null
            }
        case 'USER_LOGGED_IN':{
            return {
                ...state,
                loggedUser: action.data
            }
        }

        default:
            return state;
    }
}

export default userReducer;