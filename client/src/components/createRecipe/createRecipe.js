import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { createRecipe, getDiets } from "../../Redux/actions"
import NavBar from "../navBar/navBar"

function validate(input) {
    let errors = {}
    if (!input.title) {
        errors.title = "Debes escribir un nombre";
    } else if (!input.resume) {
        errors.resume = "Debes escribir un resumen"
    } else if (input.score > 100 && input.score < 0) {
        errors.score = "El score debe ser igual o entre 0 y 100";
    } else if (input.level < 0 && input.level > 10) {
        errors.level = "El levelHealth debe ser igual o entre 0 y 10"
    } else if (!input.diets) {
        errors.diets = "Debes elegir al menos un tipo de dieta"
    }
    return errors
}

export default function CreatedRecipe() {
    const [errors, setError] = useState({})
    const navigate = useNavigate()
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
        setError(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }
    function onHandleSelect(event) {
        setInput({
            ...input,
            diets: [...input.diets, event.target.value]
        })
        setError(validate({
            ...input,
            diets: [...input.diets, event.target.value]
        }
        ))
    }

    function onHandleSubmit(event) {
        event.preventDefault();
        dispatch(createRecipe(input))
        alert("¡Receta Creada!")
        setInput({})
        navigate("/home")
    }

    useEffect(() => {
        dispatch(getDiets());
    }, [])



    return (<div className="background">
        <NavBar />

        <h1>¡Show us your recipe!</h1>

        <div className="divcreacion">
            <form>
                <div>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            value={input.title}
                            name="title"
                            onChange={(e) => onHandleChange(e)}
                        ></input>
                        {errors.title && (<p>{errors.title}</p>)}
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

                </div>
                <div>
                    <label>Resume:</label><textarea
                        type="text"
                        value={input.resume}
                        name="resume"
                        onChange={(e) => onHandleChange(e)}
                    ></textarea>
                    <div>
                        <label>Steps:</label>
                        <textarea
                            type="text"
                            value={input.steps}
                            name="steps"
                            onChange={(e) => onHandleChange(e)}
                        ></textarea>
                    </div>
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
                        <ul> {input.diets.map(dt => dt + ", ")}</ul>
                    </label>
                </div>
            </form>

            <button
                onClick={(event) => onHandleSubmit(event)}
                type="submit">¡Agrega tu receta!</button>
        </div>

    </div>)
}