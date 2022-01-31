import { ASCENDENTE, DESCENDENTE } from "../../components/orderRecipes/orderRecipes"
import { SEARCH_RECIPE, FILTERED_RECIPES, CREATE_RECIPE, GET_RECIPES, ORDER, DETAIL_RECIPES } from "../actions"
const initialState = {
    recipes: [],
    filteredRecipes: [],
    createRecipes: [],
    ordered: [],
    detailsRecipe: {}
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
            const allRecipes = state.recipes
            const dietsFilter = action.payload === allRecipes ? allRecipes : allRecipes.filter(e => e.diets === action.payload)
            console.log(1111111, action.payload)
            console.log(22222222222, dietsFilter)
            return {
                ...state,
                recipes: dietsFilter
            }
        case CREATE_RECIPE:
            return {
                ...state,
                createRecipes: action.payload
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
                detailsRecipe: action.payload
            }
        default:
            return state
    }

}


export default rootReducer