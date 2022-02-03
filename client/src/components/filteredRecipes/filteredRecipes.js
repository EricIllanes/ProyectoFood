import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filteredRecipe, getDiets, getRecipes } from "../../Redux/actions"



export default function FilteredRecipes() {
    const [filters, setFilters] = useState({ title: [] })
    const dispatch = useDispatch()
    const recipes = useSelector((state) => state.recipes)

    // function filteredApply() {
    //     recipes.filter(el => el.filters.title)
    // }

    // function onHandleSelect(event) {
    //     setFilters({
    //         ...filters,
    //         title: [...filters.title, event.target.value]
    //     })
    // }

    // function onHandleSubmit(event) {
    //     event.preventDefault();
    //     dispatch(filteredRecipe(filteredApply()))
    //     setFilters({})
    // [{id: "1", title:"completo", diets: [{id:"3", title: "ketogenic", score: "3"}]},{id: "2", title:"completamente", diets: [{id:"9", title: "vegan", score: "5"}]}]


    function onHandleSelect(event) {
        dispatch(filteredRecipe(event.target.value))
    }

    useEffect(() => {
        dispatch(getRecipes());
    }, [])

    return (<div>{

        <div>
            <select onChange={(event) => onHandleSelect(event)}>
                <option
                    name="all"
                    value="all">All</option>
                <option
                    name="gluten free"
                    value="gluten free">Gluten Free</option>

                <option
                    name="ketogenic"
                    value="ketogenic">Ketogenic</option>
                <option
                    name="vegetarian"
                    value="vegetarian">Vegetarian</option>
                <option
                    name="lacto vegetarian"
                    value="lacto vegetarian">Lacto-Vegetarian</option>
                <option
                    name="ovo vegetarian"
                    value="ovo vegetarian">Ovo-Vegetarian</option>
                <option
                    name="vegan"
                    value="vegan">vegan</option>
                <option
                    name="pescetarian"
                    value="pescetarian">Pescetarian</option>
                <option
                    name="paleo"
                    value="paleo">Paleo</option>
                <option
                    name="primal"
                    value="primal">Primal</option>
                <option
                    name="low fodmap"
                    value="low fodmap">Low Fodmap</option>
                <option
                    name="whole30"
                    value="whole30">Whole30</option>

            </select>

        </div>
        /* <div>
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
        </div>*/

    }

    </div>)

}