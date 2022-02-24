import actionsTypes from './actionsTypes'
import { newProducts, popularFind } from '../../DataItems'

export const setNewProducts = () => {
    return (dispatch) => {
        dispatch({ type: actionsTypes.SHOW_NEW_PRODUCTS, payload: newProducts })
    }
} 

export const setProductsFinds = () => {
    return (dispatch) => {
        dispatch({ type: actionsTypes.SHOW_POPULAR_FINDS, payload: popularFind })
    }
} 