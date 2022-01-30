import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
export default function DetailRecipe(name, image, diets, score, level, resume, steps) {
    let [recipe, setRecipe] = useState()
    const { detailsRecipe } = useSelector((state) => state)
    let { id } = useParams()
    // useEffect(() => {
    //     axios.get("http://localhost:3001/api/recipes/recipes/" + id)
    //         .then((response) => {
    //             setRecipe(response.data)
    //         })
    //     return () => {
    //         setRecipe(null)
    //     }  //cleanup por trabajar con redux
    // }, [])
    // console.log(recipe)

    return (<div>
        {
            detailsRecipe ?
                <>
                    <h3>{detailsRecipe.title}</h3>
                    {/* <img src={recipe.image} alt="image" />
                    <h3> {recipe.resume || recipe.summary}</h3>
                    <h3>{recipe.instructions || recipe.steps}</h3> */}
                </> :
                <div>loading</div>
        }



        {/* 
        <h3>name {name}</h3>
        <h3>image {image}</h3> */}
        {/* <h3>diets</h3>
        <h3>tipo de plato</h3>
        <h3>score</h3>
        <h3>level</h3>
        <h3>resumen</h3>
        <h3>paso a paso</h3> */}





    </div>)
}