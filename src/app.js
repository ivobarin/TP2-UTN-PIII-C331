const express = require("express");
const app = express();
const port = 3000;

// importar los routers 
const mainRouter = require("./routes/main.routes.js");
const puertoRouter = require("./routes/puerto.routes.js"); 
const aeropuertoRouter = require("./routes/aeropuertos.routes.js");
const directorRouter = require("./routes/director.routes.js");

const cors = require("cors"); // modulo cors para habilitar el acceso a la informacion de la api

// importar la base de datos
const db = require("./models/db.js");

// Sincronizar la base de datos
const conectarDB = async () => {
  try {
    await db.authenticate();
    console.log("BD puertos status: 200 OK");
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

// cors se habilita como middleware en express para que todas las rutas tengan acceso a la informacion
app.use(cors());

// middleware para que express pueda entender los datos que vienen en formato json
app.use(express.json());

// ruta raiz de la aplicacion
app.use("/", mainRouter);

// ruta para los puertos (json)
app.use("/puertos", puertoRouter);

// ruta para los aeropuertos 
app.use("/aeropuertos", aeropuertoRouter)

// ruta para los directores
app.use("/directores", directorRouter)

// seteamos el modelo vista controlador EJS como motor de plantillas para renderizar las vistas
app.set("views", __dirname + "/views"); // direccion de las vistas
app.set("view engine", "ejs");

// middleware para error 404 - Not Found
app.use((req, res) => {
  res.status(404).render('error', {
    title: 'Página no encontrada',
    titulo: '404 - Página no encontrada',
    mensaje: 'La ruta que buscas no existe.',
  });
});

app.listen(port, () => {
  // conectar a la base de datos
  conectarDB();
  console.log(`Port 200 OK\n\nEnlace de la ruta: http://localhost:${port}\n  `);

});
