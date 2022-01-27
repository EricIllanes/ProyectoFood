const { Router } = require('express');
const { Recipes, Diets } = require("../db")
const axios = require("axios")
const { Op } = require("sequelize")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const API_KEY = process.env.API_KEY
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

/*

router.get("/recipes", (req,res,next) =>{
let name = req.query.name
let recipesPromAPI = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`)
let recipesPromDB = Recipes.findAll({
if(name) {

// EAT ENJOY ___ AND REPEAT
}
})
https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
*/
router.get("/recipes", async (req, res, next) => {
    try {
        const { name } = req.query
        console.log(2222222222222222, name)
        let recipesAPI = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${API_KEY}`)
        let recipesDB = await Recipes.findAll({
            where: {
                name: {
                    [Op.iLike]: "%" + name + "%"
                },
            },
            order: [["name", "ASC"]]

        })
        console.log(1111111111111111111111111111, recipesDB)
        let filteredRecipesAPI = recipesAPI.data.results    //data es por axios
        let allRecipes = [...filteredRecipesAPI, ...recipesDB]
        res.send(allRecipes)
    } catch (error) {

        next(error)
    }

})


router.get("/recipes/:id", async (req, res, next) => {
    //pedir detalles de la receta entregando el ID de la receta GET /recipes/{idReceta}
    try {
        const { id } = req.params

        let recipes

        if (typeof id === "string" && id.length > 8) {
            recipes = await Recipes.findByPk(id, {
                include: [{
                    model: Diets,
                    through: { attributes: [] }    // investigar
                }]
            })
            return res.send(recipes)
        } else {
            recipes = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)

        }
        return res.json(recipes.data)

    } catch (error) {
        next(error)
    }

})

router.post("/recipe", async (req, res, next) => {
    try {
        const { name, resume, score, level, steps, image, diets } = req.body
        const diet = await Diets.findOne({
            where: {
                name: diets
            }
        })
        console.log(diet)
        const newRecipes = await Recipes.create({
            name, resume, score, level, steps, image
        })

        await newRecipes.addDiets(diet.id)
        res.send(newRecipes)

    } catch (error) {
        next(error)
    }
})

module.exports = router;


/*
git remote add origin https://github.com/EricIllanes/ProyectoIndividual.git
git branch -M main
git push -u origin main


git remote https://github.com/EricIllanes/PI---Food.git origin https://github.com/EricIllanes/ProyectoIndividual.git 
*/