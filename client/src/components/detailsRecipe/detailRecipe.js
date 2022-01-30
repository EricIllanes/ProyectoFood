import { useSelector } from "react-redux"


export default function DetailRecipe() {

    const { detailsRecipe } = useSelector((state) => state)
    console.log(detailsRecipe)

    return (<div>
        {
            detailsRecipe ?
                <>
                    <img src={detailsRecipe.image} alt="image" />
                    <h3>{detailsRecipe.title}</h3>
                    <h3>{detailsRecipe.dishTypes}</h3>
                    <h3></h3>
                    <h3>{detailsRecipe.spoonacularScore || detailsRecipe.score}</h3>
                    <h3>{detailsRecipe.healthScore || detailsRecipe.level}</h3>
                    <h3> {detailsRecipe.resume || detailsRecipe.summary}</h3>
                    <h3>{detailsRecipe.instructions || detailsRecipe.steps}</h3>
                    <h3></h3>
                    <h3></h3>

                </> :
                <div>loading</div>
        }


    </div>)
}