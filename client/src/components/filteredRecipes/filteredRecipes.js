import { useState } from "react"
import { useDispatch } from "react-redux"
import { filteredRecipe } from "../../Redux/actions"



export default function FilteredRecipes() {
    const [filters, setFilters] = useState()
    const dispatch = useDispatch()



    function handleFilterRecipes(event) {
        dispatch(filteredRecipe(event.target.value))

    }

    return (<div>
        <select onChange={event => handleFilterRecipes(event)}>
            <option value="gluten free">gluten free</option>
            <option value="ketogenic">ketogenic</option>
            <option value="vegetarian">vegetarian</option>
            <option value="lacto-vegetarian">lacto-vegetarian</option>
            <option value="ovo-vegetarian">ovo-vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="pescetarian">pescetarian</option>
            <option value="paleo">paleo</option>
            <option value="primal">primal</option>
            <option value="low fodmap">"low fodmap"</option>
            <option value="whole30"> "whole30"</option>

        </select>


    </div>)

}