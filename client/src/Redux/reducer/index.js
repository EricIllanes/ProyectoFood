import { ASCENDENTE, DESCENDENTE, ASCENDENTSCORE, DESCENDENTSCORE } from "../../components/orderRecipes/orderRecipes"
import { SEARCH_RECIPE, FILTERED_RECIPES, CREATE_RECIPE, GET_RECIPES, ORDER, DETAIL_RECIPES, GET_DIETS, ORDERSCORE } from "../actions"
const initialState = {
    recipes: [],
    diets: [],
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
            const recipesFilter = action.payload === allRecipes ? allRecipes : allRecipes.filter(e => e.recipes === action.payload)
            console.log(1111111111111, action.payload)
            return {
                ...state,
                recipes: recipesFilter
            }
        case CREATE_RECIPE:
            return {
                ...state,
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

        case ORDERSCORE:
            let orderedScoreRecipes = [...state.recipes]

            orderedScoreRecipes = orderedScoreRecipes.sort((a, b) => {
                if (a.spoonacularScore < b.spoonacularScore) {
                    return action.payload === ASCENDENTSCORE ? -1 : 1;
                }
                if (a.spoonacularScore > b.spoonacularScore) {
                    return action.paylaod === ASCENDENTSCORE ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                recipes: orderedScoreRecipes
            }

        case DETAIL_RECIPES:
            return {
                ...state,
                detailsRecipe: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        default:
            return state
    }

}


export default rootReducer