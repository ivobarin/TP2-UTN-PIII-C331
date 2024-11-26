const { aeropuertoModel } = require("../models/modeloTablas");
const { getDirectores }  = require("./director.controller");

const getAeropuerto = async (req, res) => {
  try {
    const aeropuerto = await aeropuertoModel.findByPk(req.params.id);
    res.json(aeropuerto);
  } catch (error) {
    res.json({ error: error.message });
  }
};


/**
 * Función para obtener los registros de la tabla 'aeropuertos' de la base de datos. Cumpliendo con funcionalidades adicionales requeridas. 
 * 
 * @param {*} req : La propiedad req.query permite acceder a los parámetros de consulta desde la dirección URL de una solicitud HTTP entrante. Los parámetros de consulta son pares clave-valor incluidos en la dirección URL después del símbolo "?" y están separados por símbolos "&". Otra manera de hacer lo mismo es con URLSearchParams usando un addEventListener(window.location.search).
 *   
 * @param {*} res : La propiedad res.json() devuelve una respuesta en formato JSON. Esta propiedad es un método de respuesta en un objeto de solicitud HTTP.
 */

const getAeropuertos = async (req, res) => {
  try {
    
    // Capturamos los parámetros de consulta a través de req.query (URLSearchParams)
    const { 
      page = 1, 
      limit = 10, // paginado (10 registros por página)
      sort = "DESC", // ordenamiento (ASC predefinido o DESC)
      type, // tipo/categoria (favorito/internacional/nacional)
      status, // estado (active/inactive)
      id  // id del director
    } = req.query; 

    // Configuración de paginación
    const opciones = {
      limit: limit, 
      offset: limit * (page - 1), // desplazamiento de página (10 registros por página)
      order: [["updatedAt", sort.toUpperCase()]], // Ordenar por 'createdAt' (ASC o DESC)
      where: {}, // Filtros dinámicos de búsqueda (vacío por defecto)
    };

    // Filtros dinámicos (creamos una clave y guardamos el valor)
    if (type) {
      opciones.where.categoria = type; // Filtrar por tipo/categoria
    }
    if (status) {
      opciones.where.status_port = status; // Filtrar por estado
    }

    if (id) {
      opciones.where.idDirector = id; // Filtrar por id del director
      
    }

    const ejemploParams = {
      "page": "http://localhost:3000/aeropuertos?page=2", // Página actual
      "sort": "http://localhost:3000/aeropuertos?sort=DESC", // Ordenamiento
      "type": "http://localhost:3000/aeropuertos?type=nacional&sort=DESC", // Tipo/categoría
      "id": "http://localhost:3000/aeropuertos?type=nacional&sort=DESC&id=2", // Id del director
      "status": status // Estado
    }

    // Realizamos la consulta con Sequelize
    const aeropuertos = await aeropuertoModel.findAndCountAll(opciones); // Consulta paginada con opciones

    // Respuesta con información paginada
    res.json({
      limiteRegistros: limit, // Límite de registros por página
      totalRegistros: aeropuertos.count, // Total de registros
      paginasTotales: Math.ceil(aeropuertos.count / limit), // Total de páginas
      paginaActual: parseInt(page), // Página actual
      aeropuertos: aeropuertos.rows, // Resultados
      ejemploParams: ejemploParams, // Ejemplo de parámetros de consulta 
      // debug: {opciones}
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREAR REGISTRO DE POST EN LA BASE DE DATOS
const postAeropuertos = async (req, res) => {
  try {
    const post = await aeropuertoModel.create(req.body);
    res.json(post);
  } catch (error) {
    res.json({ message: error.message });
  }
};

// ACTUALIZAR REGISTRO DE POST EN LA BASE DE DATOS
const putAeropuerto = async (req, res) => {
  try {
    const put = await aeropuertoModel.update(req.body, {
      where: { id: req.params.id },
    }); // actualizamos el post por id
    res.json(put); // enviamos el put en formato json
  } catch (error) {
    res.json({ message: error.message });
  }
};

// ELIMINAR REGISTRO DE POST EN LA BASE DE DATOS
const deleteAeropuerto = async (req, res) => {
  try {
    // Importamos el modelo de postsModel
    const borrar = await aeropuertoModel.destroy({
      where: { id: req.params.id },
    }); // eliminamos el post por id
    res.json(borrar); //
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  getAeropuerto,
  getAeropuertos,
  postAeropuertos,
  putAeropuerto,
  deleteAeropuerto,
};
