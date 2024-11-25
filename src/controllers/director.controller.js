const {directorModel} = require("../models/modeloTablas");

const getDirector = async (req, res) => {
  try {
    const director = await directorModel.findByPk(req.params.id);
    res.json(director);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const getDirectores = async (req, res) => {
  try {
    const directores = await directorModel.findAll();
    res.json(directores);
  } catch (error) {
    res.json({ error: error.message });
  }
};

// CREAR REGISTRO DE POST EN LA BASE DE DATOS
const postDirector = async(req, res) => {
    try
    {
        const post = await directorModel.create(req.body); 
        res.json(post);
    } 
    catch(error)
    {
        res.json({message: error.message});
    }
}

// ACTUALIZAR REGISTRO DE POST EN LA BASE DE DATOS
const putDirector = async(req, res) => {
  try
  {
      const put = await directorModel.update(req.body, {where: {id: req.params.id}}); // actualizamos el post por id
      res.json(put); // enviamos el put en formato json
  }
  catch(error)
  {
      res.json({message: error.message});
  }
}

// ELIMINAR REGISTRO DE POST EN LA BASE DE DATOS
const deleteDirector = async(req, res) => {
  try
  {
      // Importamos el modelo de postsModel
      const borrar = await directorModel.destroy({where: {id: req.params.id}}); // eliminamos el post por id
      res.json(borrar); // 
  }
  catch(error)
  {
      res.json({message: error.message});
  }
}

module.exports = { getDirector, getDirectores, postDirector, putDirector, deleteDirector };