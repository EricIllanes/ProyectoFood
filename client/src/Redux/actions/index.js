import axios from "axios"
import Order from "../../components/orderRecipes/orderRecipes"

export const SEARCH_RECIPE = "SEARCH_RECIPE"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const FILTERED_RECIPES = "FILTERED_RECIPES"
export const GET_RECIPES = "GET_RECIPES"
export const ORDER = "ORDER"
export const DETAIL_RECIPES = "DETAIL_RECIPES"

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

export function searchRecipe(search) {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/recipes/recipes?title=" + search)
            .then((recipes) => {
                dispatch({
                    type: SEARCH_RECIPE,
                    payload: recipes.data

                }
                )
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export function orderRecipes(order) {
    return {
        type: ORDER,
        payload: order
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

export function detailRecipes(id) {
    try {
        return async function (dispatch) {
            axios.get("http://localhost:3001/api/recipes/recipes/" + id)
                .then((details) => {
                    dispatch({
                        type: DETAIL_RECIPES,
                        payload: details.data
                    })
                })
        }


    } catch (error) {
        console.log(error)
    }

}