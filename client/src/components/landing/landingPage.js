import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <div>
            <h1>"EAT, ENJOY... REPEAT"</h1>
            <Link to="/home" ><button className="entrar">ENTRAR</button></Link>
        </div>
    )
}

export default LandingPage
