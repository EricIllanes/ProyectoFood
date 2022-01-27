const { Router } = require('express');
const { Diets } = require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/types", async (req, res, next) => {
    try {
        const diets = await Diets.findAll()
        res.status(200).send(diets)

    } catch (error) {
        next(error)
    }
})

router.post("/diets", async (req, res, next) => {

    try {
        const { name } = req.body
        const newDiets = await Diets.create({
            name
        })
        res.send(newDiets)

    } catch (error) {
        next(error)
        console.log(error)
    }

})


module.exports = router;
