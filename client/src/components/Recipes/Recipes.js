import { getRecipes, GET_RECIPES } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";




export default function Recipes() {
    let recipes = useSelector((state) => state.recipes)
    let dispatch = useDispatch()
    useEffect(() => {   //permite ejecutar una función cuando el ciclo de vida recién comienza
        dispatch(getRecipes())
    }, [])
    console.log(recipes)
    return (
        <div> GET RECIPES</div>

    )
}