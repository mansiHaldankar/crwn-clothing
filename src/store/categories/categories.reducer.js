import { CATEGORIES_ACTION_TYPES } from "./categoris.types";

const INITIAL_STATE = {
    categoriesMap: []
}

export const categoriesMapReducer = (state = INITIAL_STATE, action) => {
    const { type, payload} = action;

    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES: 
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}