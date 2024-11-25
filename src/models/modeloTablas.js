const db = require("./db");
const { DataTypes } = require("sequelize");


// modelo de la tabla puertos (AEROPUERTOS)
const aeropuertoModel = db.define("Puertos", {
    nombre: { type: DataTypes.STRING },
    ciudad: { type: DataTypes.STRING },
    pais: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    categoria: { type: DataTypes.ENUM("favorite", "airport", "airport_distance")},
    status_port: { type: DataTypes.ENUM("active", "inactive")},
    idDirector : { type: DataTypes.INTEGER } 
});

// modelo de la tabla Directores
const directorModel = db.define("Directores", {
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
});

module.exports = {aeropuertoModel, directorModel};
