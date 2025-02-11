import { useReducer } from "react"
import AuthContext from "../contexts/AuthContext"
import AuthReducer from "../reducers/AuthReducer"
import axiosAuth from "../axios/axiosAuth"
import PropTypes from "prop-types"

const AuthState = ({ children }) => {
    const initialState = {
        auth: {}
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const getAuth = async () => {
        const { status, data: { username } } = await axiosAuth.get('/user')
        if(status === 200){
            dispatch({
                type: 'GET_AUTH',
                username: username
            })
        }
    }

    const logout = () => {
        localStorage.removeItem('auth_token')
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider value={{
            auth: state.auth,
            getAuth,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthState

AuthState.propTypes = {
    children: PropTypes.node
}
