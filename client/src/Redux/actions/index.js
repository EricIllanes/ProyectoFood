import axios from "axios"

export const SEARCH_RECIPE = "SEARCH_RECIPE"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const FILTERED_RECIPES = "FILTERED_RECIPES"
export const GET_RECIPES = "GET_RECIPES"


export function getRecipes() {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/recipes/recipes?name=")
            .then((recipes) => {
                dispatch({
                    type: GET_RECIPES,
                    payload: recipes.data

                }
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function searchRecipe(payload) {
    return {
        type: SEARCH_RECIPE,
        payload: payload
    }
}

export function filteredRecipe(index) {
    return {
        type: FILTERED_RECIPES,
        payload: index
    }
}

export function createRecipe(payload) {
    return {
        type: CREATE_RECIPE,
        payload: payload
    }
}