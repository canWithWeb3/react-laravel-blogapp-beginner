import { useReducer } from "react"
import AuthContext from "../contexts/AuthContext"
import AuthReducer from "../reducers/AuthReducer"
import axiosGuest from "../axios/axiosGuest"
import PropTypes from "prop-types"

const AuthState = ({ children }) => {
    const initialState = {
        user: {}
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const getAuth = async () => {
        const authToken = JSON.parse(localStorage.getItem('auth_token'))
        console.log('authToken', authToken)
        if(authToken){
            try{
                const res = await axiosGuest.get('/user', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                })

                if(res.status === 200){
                    dispatch({
                        type: 'GET_AUTH',
                        user: res.data.user
                    })
                }
                console.log('res', res)
            }catch(err){
                console.log('err', err)
            }
        }
    }

    const logout = async () => {
        localStorage.removeItem('auth_token')
        dispatch({
            type: 'LOGOUT'
        })
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
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
