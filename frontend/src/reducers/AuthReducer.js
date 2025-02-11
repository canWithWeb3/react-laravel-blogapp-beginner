const AuthReducer = (state, action) => {
    switch (action.type) {
        case "GET_AUTH":
            return {
                ...state,
                auth: {
                    username: action.username
                }
            }

        case "LOGOUT":
            return {
                ...state,
                auth: {}
            }

        default:
            return state
    }
}

export default AuthReducer
