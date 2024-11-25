const router = require("express").Router();

// controlador para la ruta de los directores almacenados en la base de datos
const {
  getDirector,
  getDirectores,
  postDirector,
  putDirector,
  deleteDirector,
} = require("../controllers/director.controller");

// // CRUD de los directores 
router.get("/", getDirectores); // GET para obtener todos los directores
router.post("/", postDirector); // POST para agregar un nuevo director
router.get("/:id", getDirector); // GET para obtener un director por id
router.put("/:id", putDirector); // PUT para actualizar un director por id
router.delete("/:id", deleteDirector); // DELETE para eliminar un director por id

module.exports = router;
