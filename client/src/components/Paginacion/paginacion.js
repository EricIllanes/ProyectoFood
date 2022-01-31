import { useState } from "react"
import { useSelector } from "react-redux"

export default function PaginationRecipe({ pagina, setPagina, maximo }) {
    const { recipes } = useSelector(state => state)
    const [input, setInput] = useState(1)
    function nextPage() {
        setInput(input + 1)
        setPagina(pagina + 1)
    }

    function previousPage() {
        setInput(input - 1)
        setPagina(pagina - 1)
    }

    return (<div>
        {
            recipes.length > 0 ?
                <div className="botonesavanzarparatras">
                    <button
                        disabled={pagina === maximo || pagina > maximo}
                        onClick={() => nextPage()}
                    > Next
                    </button>
                    <p>{pagina} de {Math.ceil(maximo)}</p>
                    <button
                        disabled={pagina === 1 || pagina < 1}
                        onClick={() => previousPage()}
                    >Previous
                    </button>
                </div>
                : <div></div>
        }

    </div>
    )
}