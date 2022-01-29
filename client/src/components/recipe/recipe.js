import { Link } from "react-router-dom"
export default function Recipe({ id, title, image, diets }) {
    return (
        <div>
            <Link to={`/${id}`}>
                <h3>{title}</h3>
            </Link>
            <img src={image} alt="image" />
            <h3>Dietas : {diets}</h3>





        </div>
    )
}