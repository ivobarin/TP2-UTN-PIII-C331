const { aeropuertoModel } = require("../models/modeloTablas");
const { directorModel } = require("../models/modeloTablas");

module.exports = {
  index: async (req, res) => {
    try {
      // devuelve todos los registros de la tabla como instancia de Sequelize que contiene metadatos adicionales
      const aeropuertos = await aeropuertoModel.findAll();
      const directores = await directorModel.findAll();

      // Solo los datos relevantes de la tabla
      const puertos = aeropuertos.map((puerto) => puerto.dataValues);
      const dirs = directores.map((director) => director.dataValues);

      res.render("index", { aeropuertos: puertos, directores: dirs });
    } catch (error) {
      res.render("error", {
        title: "Error en la petición",
        titulo: "No se pudo cargar la base de datos",
        mensaje:
          "Error al cargar la base de datos, por favor intente más tarde",
      });
    }
  },
};
