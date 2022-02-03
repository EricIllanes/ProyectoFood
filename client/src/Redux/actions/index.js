import axios from "axios"

export const SEARCH_RECIPE = "SEARCH_RECIPE"
export const CREATE_RECIPE = "CREATE_RECIPE"
export const FILTERED_RECIPES = "FILTERED_RECIPES"
export const GET_RECIPES = "GET_RECIPES"
export const ORDER = "ORDER"
export const DETAIL_RECIPES = "DETAIL_RECIPES"
export const GET_DIETS = "GET_DIETS"
export const ORDERSCORE = "ORDERSCORE"

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

export function getDiets() {
    return async function (dispatch) {
        axios.get("http://localhost:3001/api/diets/types", {})
            .then((diets) => {
                dispatch({
                    type: GET_DIETS,
                    payload: diets.data
                })
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

export function createRecipe(payload) {
    return async function () {
        var info = axios.post("http://localhost:3001/api/recipes/recipe", payload)  //se hace el post del payload
        return info;
    }
}

export function orderRecipes(order) {
    console.log(11111111, order)
    return {
        type: ORDER,
        payload: order
    }

}

export function orderRecipesScore(order) {
    return {
        type: ORDERSCORE,
        payload: order
    }

}

export function filteredRecipe(payload) {
    return {

        type: FILTERED_RECIPES,
        payload
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