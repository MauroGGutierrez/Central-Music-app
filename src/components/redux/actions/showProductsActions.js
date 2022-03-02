import actionsTypes from './actionsTypes'
import newProducts from '../../dataItems/DataNewProducts' 
import popularFinds from '../../dataItems/DataPopularFinds' 
//find(item => item.id == e)

export const setNewProducts = (e) => {
    return (dispatch) => {
        dispatch({ type: actionsTypes.SHOW_NEW_PRODUCTS,
             payload: newProducts.find(item => item.id === e) })
    }
} 

export const setProductsFinds = (e) => {
    return (dispatch) => {
        dispatch({ type: actionsTypes.SHOW_POPULAR_FINDS,
            payload: popularFinds.find(item => item.id === e)})
    }
} 