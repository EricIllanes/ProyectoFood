import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { detailRecipes } from "../../Redux/actions"

export default function Recipe({ id, title, image, diets, dishTypes, score }) {
    const dispatch = useDispatch()
    return (
        <div>
            <Link to={`/${id}`}
                onClick={() => { dispatch(detailRecipes(id)) }}
            >
                <h3>{title}</h3>
            </Link>
            <img src={image ? image :
                "https://image.freepik.com/vector-gratis/plato-vacio-tenedor-cuchara-vector_53876-61874.jpg"} alt="" />
            <h3>Dietas : {diets}</h3>
            <h3>Tipo de plato: {dishTypes}</h3>
            <h3>Score: {score}</h3>





        </div>
    )
}