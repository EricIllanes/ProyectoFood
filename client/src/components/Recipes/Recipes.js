// import { getRecipes } from "../../Redux/actions";
// import { useDispatch, useSelector } from "react-redux"
// import { useEffect } from "react";
// import Recipe from "../recipe/recipe";




// export default function Recipes() {
//     let recipes = useSelector((state) => state.recipes)
//     let dispatch = useDispatch()
//     // useEffect(() => {   //permite ejecutar una función cuando el ciclo de vida recién comienza
//     // dispatch(getRecipes())
//     // }, [])
//     console.log(recipes)
//     return (
//         <div>

//             {recipes.map((recipe, index) => {
//                 <div key={index}>
//                     return <Recipe name={recipe.name || recipe.title} image={recipe.image} />

//                 </div>
//             })}

//         </div>

//     )
// }