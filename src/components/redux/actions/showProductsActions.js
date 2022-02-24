import actionsTypes from './actionsTypes'
import { newProducts, popularFind } from '../../DataItems'
//find(item => item.id == e)

export const setNewProducts = () => {
    return (dispatch) => {
        dispatch({ type: actionsTypes.SHOW_NEW_PRODUCTS, payload: newProducts.find(item => item.id === 1) })
    }
} 

export const setProductsFinds = () => {
    return (dispatch) => {
        dispatch({ type: actionsTypes.SHOW_POPULAR_FINDS, payload: popularFind.find(item => item.id === 6)})
    }
} 