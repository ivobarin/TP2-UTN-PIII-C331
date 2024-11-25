const router = require("express").Router();

// controlador para la ruta de los aeropuertos almacenados en la base de datos
const {
  getAeropuerto,
  getAeropuertos,
  postAeropuertos,
  putAeropuerto,
  deleteAeropuerto,
} = require("../controllers/aeropuerto.controller");

// CRUD de los aeropuertos
router.get("/", getAeropuertos); // GET para obtener todos los aeropuertos
router.post("/", postAeropuertos); // POST para agregar un nuevo aeropuerto
router.get("/:id", getAeropuerto); // GET para obtener un aeropuerto por id
router.put("/:id", putAeropuerto); // PUT para actualizar un aeropuerto por id
router.delete("/:id", deleteAeropuerto); // DELETE para eliminar un aeropuerto por id

module.exports = router;
