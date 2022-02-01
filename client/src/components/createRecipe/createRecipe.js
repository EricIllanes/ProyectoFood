import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createRecipe, getDiets } from "../../Redux/actions"
import NavBar from "../navBar/navBar"


export default function CreatedRecipe() {
    const dispatch = useDispatch()
    const diets = useSelector((state) => state.diets)
    const [input, setInput] = useState({
        title: "",
        resume: "",
        score: "",
        level: "",
        steps: "",
        image: "",
        dishTypes: "",
        diets: []
    }
    )

    function onHandleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }
    // function onHandleCheck(event) {
    //     if (event.target.checked) {
    //         setInput({
    //             ...input,
    //             diets: event.target.value
    //         })
    //     }
    // }

    function onHandleSelect(event) {
        setInput({
            ...input,
            diets: [...input.diets, event.target.value]
        })
    }

    function onHandleSubmit(event) {
        event.preventDefault();
        dispatch(createRecipe(input))
        alert("¡Receta Creada!")
        setInput({})
    }

    useEffect(() => {
        dispatch(getDiets());
    }, [])



    return (<div className="divpadre">
        <NavBar />

        <h1>HOLA DESDE LA CREACIÓN DE RECETAS</h1>

        <div>
            <form>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={input.title}
                        name="title"
                        onChange={(e) => onHandleChange(e)}
                    ></input>
                </div>
                <div>
                    <label>Resume:</label><input
                        type="text"
                        value={input.resume}
                        name="resume"
                        onChange={(e) => onHandleChange(e)}
                    ></input>

                </div>
                <div>
                    <label>Score:</label>
                    <input
                        type="number"
                        value={input.score}
                        name="score"
                        onChange={(e) => onHandleChange(e)}
                    ></input>
                </div>

                <div>
                    <label>Level:</label>
                    <input
                        onChange={(e) => onHandleChange(e)}
                        type="number"
                        value={input.level}
                        name="level"></input>


                </div>
                <div>
                    <label>Steps:</label>
                    <input
                        type="text"
                        value={input.steps}
                        name="steps"
                        onChange={(e) => onHandleChange(e)}
                    ></input>
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="text"
                        value={input.image}
                        name="image"
                        onChange={(e) => onHandleChange(e)}
                    ></input>
                </div>
                <div>
                    <label>Dish Type</label>
                    <input
                        type="text"
                        value={input.dishTypes}
                        name="dishTypes"
                        onChange={(e) => onHandleChange(e)}
                    ></input>
                </div>

                <div>
                    <label>Diets: <select
                        onChange={(event) => onHandleSelect(event)}
                    > Diets:
                        {diets.map((dt, index) => (
                            <option

                                key={index}
                                value={dt.title}
                                onChange={(e) => onHandleChange(e)}
                            > {dt.title}</option>
                        ))}
                    </select>
                        <ul><li> {input.diets.map(dt => dt + ", ")}</li></ul>

                    </label>
                </div>
            </form>

            <button
                onClick={(event) => onHandleSubmit(event)}
                type="submit">¡Agrega tu receta!</button>
        </div>

    </div>)
}