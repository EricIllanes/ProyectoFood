import "./landing.css"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div className="landing">
            <div>
                <h1 className="titulolanding">EAT, ENJOY... REPEAT</h1>
                <Link to="/home" ><button className="botonlanding">ENTRAR</button></Link>

            </div>

        </div>
    )
}

export default LandingPage
