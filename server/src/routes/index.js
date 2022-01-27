const { Router } = require('express');
const recipesRoute = require("./Recipes")
const dietsRoute = require("./Diets")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipesRoute)
router.use("/diets", dietsRoute)


module.exports = router;
