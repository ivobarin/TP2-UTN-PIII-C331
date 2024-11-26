const db = require("./db");
const path = require("path");
const fs = require("fs")
const { aeropuertoModel } = require("./modeloTablas");
const { directorModel } = require("./modeloTablas");

const cargarTablas = async () => {
  try {
    
    // Sincroniza los modelos con la base de datos (crea tablas si no existen)
    await db.sync({ alter: true });

    // Hardcodea los datos de directores
    console.log("\nCargando datos iniciales en Directores...\n");
    const directoresPath = path.join(__dirname, "./json/directores.json");
    const JSONdirectores = JSON.parse(fs.readFileSync(directoresPath, "utf8"));
    await directorModel.bulkCreate(JSONdirectores);

    // Hardcodea los datos de aeropuertos
    console.log("Cargando datos iniciales en Aeropuertos...\n");
    const aeropuertosPath = path.join(__dirname, "./json/aeropuertos.json");
    const JSONaeropuertos = JSON.parse(fs.readFileSync(aeropuertosPath, "utf8"));
    await aeropuertoModel.bulkCreate(JSONaeropuertos);


    console.log("\n\nBase de datos inicializada correctamente.\n\n");
    process.exit(); 
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    process.exit(1);
  }
};

cargarTablas(); 