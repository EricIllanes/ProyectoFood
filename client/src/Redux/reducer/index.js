import { ASCENDENTE, DESCENDENTE } from "../../components/orderRecipes/orderRecipes"
import { SEARCH_RECIPE, FILTERED_RECIPES, CREATE_RECIPE, GET_RECIPES, ORDER, DETAIL_RECIPES } from "../actions"
const initialState = {
    recipes: [],
    filteredRecipes: [],
    createrecipes: [],
    ordered: []
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
        case ORDER:
            let orderedRecipes = [...state.recipes]

            orderedRecipes = orderedRecipes.sort((a, b) => {
                if (a.title < b.title) {
                    return action.payload === ASCENDENTE ? -1 : 1;
                }
                if (a.title > b.title) {
                    return action.payload === ASCENDENTE ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                recipes: orderedRecipes
            }
        case DETAIL_RECIPES:
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return state
    }

}


export default rootReducer