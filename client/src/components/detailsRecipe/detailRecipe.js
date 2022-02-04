import { useSelector } from "react-redux"
import NavBar from "../navBar/navBar"


export default function DetailRecipe() {

    const { detailsRecipe } = useSelector((state) => state)

    return (<div className="background" >
        <NavBar />
        {
            detailsRecipe ?
                <div className="detailcard">
                    <img src={detailsRecipe.image ? detailsRecipe.image :
                        "https://cdn-icons.flaticon.com/png/512/4262/premium/4262736.png?token=exp=1643954045~hmac=b4a8c66fb4204a458f015b760c9c931e"}
                        alt="img" />
                    <h3>Name: {detailsRecipe.title}</h3>
                    <h3>Dish type: {detailsRecipe.dishTypes}</h3>
                    <h3>Diets: {
                        detailsRecipe.diets && ((typeof detailsRecipe.diets[0] === "string" ? detailsRecipe.diets : detailsRecipe.diets.map((e) => e.title + ", ")))
                    }</h3>
                    <h3>Score: {(detailsRecipe.spoonacularScore || detailsRecipe.score) ? (detailsRecipe.spoonacularScore || detailsRecipe.score) : "Sin puntaje asociado"}</h3>
                    <h3>Health Score: {(detailsRecipe.healthScore || detailsRecipe.level) ? (detailsRecipe.healthScore || detailsRecipe.level) : "Sin puntaje asociado"}</h3>
                    <div><b>Resume:</b> <div className="resume" dangerouslySetInnerHTML={{ __html: detailsRecipe.summary || detailsRecipe.resume }}></div></div>
                    {/* <h3 > {detailsRecipe.resume || detailsRecipe.summary}</h3> */}
                    <div><b>Step:</b><div className="instruction" dangerouslySetInnerHTML={{ __html: detailsRecipe.instructions || detailsRecipe.steps }}></div></div>
                    {/* <h3>{detailsRecipe.instructions || detailsRecipe.steps}</h3> */}
                </div> :
                <div>loading</div>
        }
    </div>

    )
}