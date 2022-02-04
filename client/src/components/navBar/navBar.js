import "./navBar.css"
import { Link } from "react-router-dom"
export default function NavBar() {

    return (
        <div className="navBar">
            <Link to="/"><button className="inicio">Inicio</button></Link>
            <Link to="/home"><button className="home">Home</button></Link>
            <Link to="/createrecipe" className="createrecipe"><button>Create Recipe</button></Link>

        </div>
    )
}