import { combineReducers } from 'redux'
import { showProductsReducers } from './showProductsReducers'

const reducer = combineReducers({
    showProducts: showProductsReducers
}) 

export default reducer