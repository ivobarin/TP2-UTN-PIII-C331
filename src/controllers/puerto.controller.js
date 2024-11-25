// Importamos la función para obtener los datos
const { obtenerPuertos } = require('../data/data');

module.exports = {
    index: async (req, res) => {
        try {
            const puertos = await obtenerPuertos(); // Esperamos los datos de la API
            res.json(puertos); // Enviamos los datos como JSON
        } catch (error) {
            console.error("Error al obtener los aeropuertos:", error);
            res.status(500).json({ message: "Error al obtener los aeropuertos" });
        }
    }
};
