import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes, searchRecipe } from "../../Redux/actions"
import DetailRecipe from "../detailsRecipe/detailRecipe"
import NavBar from "../navBar/navBar"
import Order from "../orderRecipes/orderRecipes"
import Recipe from "../recipe/recipe"
import "./searchRecipe.css"

function SearchRecipe() {
    const { recipes } = useSelector((state) => state)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    function handleInputChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
    }




    return (<div>
        {/* <img className="imbg" src="https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="image" /> */}
        <div className="background">

            {NavBar()}
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
                        <div key={index} className="cards">
                            <Recipe id={recipe.id} title={recipe.title} image={recipe.image} dishTypes={recipe.dishTypes} />
                        </div>)
                }
                )}
            </div>
        </div >
    </div>)
}

export default SearchRecipe


/*
para mostrar la dieta, poner condicional si array contiene string que haga tal cosa si no que haga otra cosa
*/