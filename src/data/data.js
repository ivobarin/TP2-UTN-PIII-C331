const fs = require('fs'); // modulo para leer y escribir archivos

// asi se hace una peticion a la api de airportgap para obtener los aeropuertos 
// promesa 
const obtenerPuertos = async () => {
  try {
    const peticion = await fetch("https://airportgap.com/api/airports");
    const datos = await peticion.json(); // siempre parseamos la respuesta de la peticion (a json o texto)
    return datos;
  } catch (error) {
    console.log({ title: error.name, message: error.message });
  }
};

module.exports = {obtenerPuertos}; // exportamos la promesa 