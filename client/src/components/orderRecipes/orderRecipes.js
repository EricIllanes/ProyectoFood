import { useDispatch } from "react-redux"
import { orderRecipes } from "../../Redux/actions"


export const ASCENDENTE = "ASCENDENTE"
export const DESCENDENTE = "DESCENDENTE"


export default function Order() {
    const dispatch = useDispatch()
    function onSelectChange(event) {
        event.preventDefault()
        dispatch(orderRecipes(event.target.value))
    }


    return (<div>

        <select name="select" onChange={onSelectChange}>
            <option value={ASCENDENTE}>"A - Z"</option>
            <option value={DESCENDENTE}>"Z - A"</option>
        </select>


    </div>)
}