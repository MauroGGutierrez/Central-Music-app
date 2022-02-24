import actionsTypes from "../actions/actionsTypes";

export const showProductsReducers = ( state = {}, action  ) => {
    switch (action.type) {
        case actionsTypes.SHOW_NEW_PRODUCTS:
            return { status: action.payload }
        case actionsTypes.SHOW_POPULAR_FINDS:
            return { status: action.payload }
    
        default:
            return state;
    }
}