import "./landing.css"
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div className="landing">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Pacifico&display=swap" rel="stylesheet"></link>
            <div>
                <h1 className="titulolanding">Eat, enjoy... repeat</h1>
                <Link to="/home" ><button className="botonlanding">ENTRAR</button></Link>


            </div>

        </div>
    )
}

export default LandingPage
