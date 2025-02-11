import { useReducer } from "react"
import CategoryReducer from "../reducers/CategoryReducer"
import CategoryContext from "../contexts/CategoryContext"
import axiosAdmin from "../axios/axiosAdmin"
import PropTypes from "prop-types"

const CategoryState = ({ children }) => {
    const initialState = {
        categories: [],
        category: {}
    }

    const [state, dispatch] = useReducer(CategoryReducer, initialState)

    const getCategories = async () => {
        try{
            const { status, data: { categories } } = await axiosAdmin.get('/categories')
            if(status === 200){
                dispatch({
                    type: 'GET_CATEGORIES',
                    categories: categories
                })
            }
        }catch(err){
            console.log('err', err)
        }
    }

    const getCategoryById = async id => {
        try{
            const { data: { category } } = await axiosAdmin.get(`/categories/${id}`)
            return category
        }catch(err){
            console.log('err', err)
        }
    }

    return (
        <CategoryContext.Provider value={{
            categories: state.categories,
            category: state.category,
            getCategories,
            getCategoryById,
        }}>
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryState

CategoryState.propTypes = {
    children: PropTypes.node
}