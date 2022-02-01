import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filteredRecipe, getDiets, getRecipes } from "../../Redux/actions"



export default function FilteredRecipes() {
    const [filters, setFilters] = useState({ title: [] })
    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)

    function onHandleSelect(event) {
        setFilters({
            ...filters,
            recipes: [...filters.title, event.target.value]
        })
    }

    function onHandleSubmit(event) {
        event.preventDefault();
        dispatch(filteredRecipe(filters))
        setFilters({})
    }


    useEffect(() => {
        dispatch(getRecipes());
    }, [])

    return (<div>
        <select onChange={(event) => onHandleSelect(event)}>
            <option
                name="gluten free"
                value="gluten free">gluten free</option>

            <option
                name="ketogenic"
                value="ketogenic">ketogenic</option>
            <option
                name="vegetarian"
                value="vegetarian">vegetarian</option>
            <option
                name="lacto-vegetarian"
                value="lacto-vegetarian">lacto-vegetarian</option>
            <option
                name="ovo-vegetarian"
                value="ovo-vegetarian">ovo-vegetarian</option>
            <option
                name="vegan"
                value="vegan">vegan</option>
            <option
                name="pescetarian"
                value="pescetarian">pescetarian</option>
            <option
                name="paleo"
                value="paleo">paleo</option>
            <option
                name="primal"
                value="primal">primal</option>
            <option
                name="low fodmap"
                value="low fodmap">"low fodmap"</option>
            <option
                name="whole30"
                value="whole30"> "whole30"</option>

        </select>

        <button onClick={(event) => onHandleSubmit(event)}
            type="submit"
        >Filtrar</button>
        {/* <div>
                    <label>Diets:</label>
                    <label><input

                        type="checkbox"
                        name="gluten free"
                        value="gluten free"
                    />
                        GlutenFree </label>

                    <label><input

                        type="checkbox"
                        name="ketogenic"
                        value="ketogenic"
                    />
                        Ketogenic </label>

                    <label><input

                        type="checkbox"
                        title="vegetarian"
                        value="vegetarian"
                    />
                        Vegetarian </label>

                    <label><input

                        type="checkbox"
                        title="lacto-vegetarian"
                        value="lacto-vegetarian"
                    />
                        Lacto-Vegetarian </label>

                    <label><input

                        type="checkbox"
                        title="ovo-vegetarian"
                        value="ovo-vegetarian"
                    />
                        Ovo-Vegetarian </label>

                    <label><input

                        type="checkbox"
                        title="vegan"
                        value="vegan"
                    />
                        Vegan </label>

                    <label><input

                        type="checkbox"
                        title="pescetarian"
                        value="pescetarian"
                    />
                        Pescetarian </label>

                    <label><input

                        type="checkbox"
                        title="paleo"
                        value="paleo"
                    />
                        Paleo </label>

                    <label><input

                        type="checkbox"
                        title="primal"
                        value="primal"
                    />
                        Primal </label>

                    <label><input

                        type="checkbox"
                        title="low fodmap"
                        value="low fodmap"
                    />
                        LowFodmap </label>

                    <label><input

                        type="checkbox"
                        title="whole30"
                        value="whole30"
                    />
                        Whole30 </label>
                </div> */}

    </div>)

}