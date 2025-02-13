import { useReducer } from "react"
import PropTypes from "prop-types"
import axiosAdmin from "../axios/axiosAdmin"
import AdminReducer from "../reducers/AdminReducer"
import AdminContext from "../contexts/AdminContext"

const AdminState = ({ children }) => {
    const initialState = {
        categories: []
    }

    const [state, dispatch] = useReducer(AdminReducer, initialState)

    const getCategories = async () => {
        const { data: { categories } } = await axiosAdmin.get('/categories')
        dispatch({
            type: 'GET_CATEGORIES',
            categories: categories
        })

        return categories
    }

    return (
        <AdminContext.Provider value={{
            categories: state.categories,
            getCategories
        }}>
            { children }
        </AdminContext.Provider>
    )
}

export default AdminState

AdminState.propTypes = {
    children: PropTypes.node
}
