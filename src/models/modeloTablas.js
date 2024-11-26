const db = require("./db");
const { DataTypes } = require("sequelize");

// modelo de la tabla Directores
const directorModel = db.define("Directores", {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
});

// modelo de la tabla puertos (AEROPUERTOS)
const aeropuertoModel = db.define("Puertos", {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    nombre: { type: DataTypes.STRING },
    ciudad: { type: DataTypes.STRING },
    pais: { type: DataTypes.STRING },
    categoria: { type: DataTypes.ENUM("favorito", "nacional", "internacional")},
    status_port: { type: DataTypes.ENUM("active", "inactive")},
    idDirector : { 
        type: DataTypes.INTEGER, 
        references : {
            model : directorModel, 
            key: "id"
        }
    } 
});

module.exports = {directorModel, aeropuertoModel};
