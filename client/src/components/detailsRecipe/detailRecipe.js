import { useSelector } from "react-redux"
import { detailRecipes } from "../../Redux/actions"


export default function DetailRecipe() {

    const { detailsRecipe } = useSelector((state) => state)
    // function showDiets() {
    //     if (detailsRecipe.diets && typeof detailsRecipe.diets[0] === "string") {
    //         detailsRecipe.diets
    //     } else if (detailsRecipe.diets[0] === "object") {
    //         detailsRecipe.diets.map((e) => e.title)
    //     } "No se encontraron dietas asociadas"
    // }

    return (<div>
        {
            detailsRecipe ?
                <div>
                    <img src={detailsRecipe.image} alt="image" />
                    <h3>{detailsRecipe.title}</h3>
                    <h3>{detailsRecipe.dishTypes}</h3>
                    <h3>{
                        detailsRecipe.diets && ((typeof detailsRecipe.diets[0] === "string" ? detailsRecipe.diets : detailsRecipe.diets.map((e) => e.title)) + "")
                    }</h3>
                    <h3>{detailsRecipe.spoonacularScore || detailsRecipe.score}</h3>
                    <h3>{detailsRecipe.healthScore || detailsRecipe.level}</h3>
                    <h3> {detailsRecipe.resume || detailsRecipe.summary}</h3>
                    <h3>{detailsRecipe.instructions || detailsRecipe.steps}</h3>
                </div> :
                <div>loading</div>
        }
    </div>

    )
}