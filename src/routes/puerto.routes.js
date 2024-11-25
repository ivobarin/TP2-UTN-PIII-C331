// Controlador para las rutas de la API
const router = require("express").Router();

// controlador para la ruta de los puertos (json)
const {index} = require("../controllers/puerto.controller.js");

router.get("/", index);

module.exports = router;