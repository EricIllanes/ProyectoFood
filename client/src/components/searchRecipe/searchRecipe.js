import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchRecipe } from "../../Redux/actions"
import NavBar from "../navBar/navBar"
import FilteredRecipes from "../filteredRecipes/filteredRecipes"
import Order from "../orderRecipes/orderRecipes"
import PaginationRecipe from "../Paginacion/paginacion"
import Recipe from "../recipe/recipe"
import "./searchRecipe.css"

export default function SearchRecipe() {
    const { recipes } = useSelector((state) => state)
    const [pagina, setPagina] = useState(1)         //empiezo en la página "1"
    const [porPagina, setPorPagina] = useState(9)   // cuantas recetas necesito mostrar
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const maximo = recipes.length / porPagina
    function handleInputChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
    }


    return (<div>
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
            <FilteredRecipes />
            <Order />
            <PaginationRecipe pagina={pagina} setPagina={setPagina} maximo={maximo} />
            <div className="background">
                {recipes
                    .slice((pagina - 1) * porPagina,
                        (pagina - 1) * porPagina + porPagina)
                    .map((recipe, index) => {
                        return (
                            <div key={index} className="cards">
                                <Recipe
                                    id={recipe.id}
                                    title={recipe.title}
                                    image={recipe.image}
                                    dishTypes={recipe.dishTypes}
                                    diets={
                                        recipe.diets && (typeof recipe.diets[0] === "string" ? recipe.diets + "" : recipe.diets.map((e) => e.title + ", "))
                                    }
                                    score={recipe.spoonacularScore} />
                            </div>)
                    }
                    )}
            </div>
            <PaginationRecipe pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div >
    </div>)
}
