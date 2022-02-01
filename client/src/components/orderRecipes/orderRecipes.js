import { useDispatch } from "react-redux"
import { orderRecipes, orderRecipesScore } from "../../Redux/actions"


export const ASCENDENTE = "ASCENDENTE"
export const DESCENDENTE = "DESCENDENTE"
export const ASCENDENTSCORE = "ASCENDENTSCORE"
export const DESCENDENTSCORE = "DESCENDENTSCORE"


export default function Order() {
    const dispatch = useDispatch()
    function onSelectChange(event) {
        event.preventDefault()
        dispatch(orderRecipes(event.target.value))
    }

    function onSelectChangeScore(e) {
        e.preventDefault()
        dispatch(orderRecipesScore(e.target.value))
    }


    return (<div>

        <select name="select" onChange={onSelectChange}>
            <option value={ASCENDENTE}>"A - Z"</option>
            <option value={DESCENDENTE}>"Z - A"</option>
        </select>

        <select name="select" onChange={(e) => onSelectChangeScore(e)}>
            <option value={ASCENDENTSCORE}> Score: "1 - 10"</option>
            <option value={DESCENDENTSCORE}> Score: "10 - 1"</option>
        </select>

    </div>)
}