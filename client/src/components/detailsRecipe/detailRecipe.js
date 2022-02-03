import { useSelector } from "react-redux"
import NavBar from "../navBar/navBar"


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
        <NavBar />
        {
            detailsRecipe ?
                <div className="detailcard">
                    <img src={detailsRecipe.image ? detailsRecipe.image :
                        "https://e7.pngegg.com/pngimages/614/789/png-clipart-round-black-spoon-and-fork-buffet-breakfast-food-cafe-restaurant-spoon-and-fork-food-breakfast-thumbnail.png"}
                        alt="img" />
                    <h3>{detailsRecipe.title}</h3>
                    <h3>{detailsRecipe.dishTypes}</h3>
                    <h3>{
                        detailsRecipe.diets && ((typeof detailsRecipe.diets[0] === "string" ? detailsRecipe.diets : detailsRecipe.diets.map((e) => e.title + ", ")))
                    }</h3>
                    <h3>{detailsRecipe.spoonacularScore || detailsRecipe.score}</h3>
                    <h3>{detailsRecipe.healthScore || detailsRecipe.level}</h3>
                    <div className="resume" dangerouslySetInnerHTML={{ __html: detailsRecipe.summary || detailsRecipe.resume }}></div>
                    {/* <h3 > {detailsRecipe.resume || detailsRecipe.summary}</h3> */}
                    <div className="instruction" dangerouslySetInnerHTML={{ __html: detailsRecipe.instructions || detailsRecipe.steps }}></div>
                    {/* <h3>{detailsRecipe.instructions || detailsRecipe.steps}</h3> */}
                </div> :
                <div>loading</div>
        }
    </div>

    )
}