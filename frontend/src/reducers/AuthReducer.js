const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'GET_AUTH':
            return {
                ...state,
                user: action.user
            }

        case 'LOGOUT': {
            return {
                ...state,
                user: {}
            }
        }
        
        default:
            return state
    }
}

export default AuthReducer
