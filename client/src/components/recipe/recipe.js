import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { detailRecipes } from "../../Redux/actions"
import "./plato.png"

export default function Recipe({ id, title, image, diets, dishTypes, score }) {
    const dispatch = useDispatch()
    return (
        <div>
            <Link to={`/${id}`}
                onClick={() => { dispatch(detailRecipes(id)) }}
            >
                <h3>{title}</h3>
            </Link>
            <img src={image ? image : "https://cdn-icons.flaticon.com/png/512/4262/premium/4262736.png?token=exp=1643954045~hmac=b4a8c66fb4204a458f015b760c9c931e"} />

            <h3>Dietas : {diets ? diets : "Sin dietas asociadas"}</h3>
            <h3>Tipo de plato: {(dishTypes) ? (dishTypes) : "Sin tipo de plato asociado"}</h3>
            <h3>Score: {(score) ? (score) : "Sin score asociado"}</h3>
        </div>
    )
}