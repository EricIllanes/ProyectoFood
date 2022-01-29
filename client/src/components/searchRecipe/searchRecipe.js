import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes, searchRecipe } from "../../Redux/actions"
import Order from "../orderRecipes/orderRecipes"
import Recipe from "../recipe/recipe"
import "./searchRecipe.css"

function SearchRecipe() {
    const { recipes } = useSelector((state) => state)
    console.log(recipes)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    function handleInputChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
    }




    return (
        <div>
            <h1>¿Qué deseas comer hoy?</h1>
            <input
                type="text"
                placeholder="¿Qué te apatece hoy?"
                onChange={(event) => handleInputChange(event)}
                value={search}
            ></input>
            <button
                onClick={() => {
                    if (!search) {
                        alert("Debes ingresar una Receta para buscar")
                    } else {
                        dispatch(searchRecipe(search))
                        setSearch("")
                    }
                }}
            >Buscar</button>
            {Order()}
            <div >
                {recipes.map((recipe, index) => {
                    return (
                        <div className="cards">
                            <Recipe title={recipe.title} image={recipe.image} />
                        </div>)
                }
                )}

            </div>

        </div >
    )
}

export default SearchRecipe
