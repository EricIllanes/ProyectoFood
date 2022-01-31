


export default function FilteredRecipes() {

    function handleFilterRecipes(event) {

    }

    return (<div>
        <div>
            <label>Dietas:</label>
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
                name="vegetarian"
                value="vegetarian"
            />
                Vegetarian </label>

            <label><input
                type="checkbox"
                name="lacto-vegetarian"
                value="lacto-vegetarian"
            />
                Lacto-Vegetarian </label>

            <label><input
                type="checkbox"
                name="ovo-vegetarian"
                value="ovo-vegetarian"
            />
                Ovo-Vegetarian </label>

            <label><input
                type="checkbox"
                name="vegan"
                value="vegan"
            />
                Vegan </label>

            <label><input
                type="checkbox"
                name="pescetarian"
                value="pescetarian"
            />
                Pescetarian </label>

            <label><input
                type="checkbox"
                name="paleo"
                value="paleo"
            />
                Paleo </label>

            <label><input
                type="checkbox"
                name="primal"
                value="primal"
            />
                Primal </label>

            <label><input
                type="checkbox"
                name="low fodmap"
                value="low fodmap"
            />
                LowFodmap </label>

            <label><input
                type="checkbox"
                name="whole30"
                value="whole30"
            />
                Whole30 </label>
            <button>Filtrar</button>
        </div>
    </div>)

}