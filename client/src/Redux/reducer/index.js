import { SEARCH_RECIPE, FILTERED_RECIPES, CREATE_RECIPE, GET_RECIPES } from "../actions"
const initialState = {
    recipes: [],
    filteredRecipes: [],
    createrecipes: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }

        case SEARCH_RECIPE:
            return {
                ...state,
                recipes: action.payload
            }
        case FILTERED_RECIPES:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case CREATE_RECIPE:
            return {
                ...state,
                createrecipes: action.payload
            }
        default:
            return state
    }

}


export default rootReducer