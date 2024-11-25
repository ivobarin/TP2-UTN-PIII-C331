# API Gestión de Aeropuertos 🛫

## Descripción
Esta API permite gestionar información relacionada con aeropuertos (modelo personalizado) y directores generales (autores).  
Se pueden realizar operaciones de creación, lectura, actualización y eliminación (**CRUD**) para los modelos personalizados y directores.

Además, la API incluye integración con la API de **Airport Gap** para obtener información adicional de aeropuertos y almacenarla en la base de datos.

La base de datos **MySQL** está organizada en dos modelos principales: **Puertos** (aeropuertos) y **Directores**.  
- Los **aeropuertos** están almacenados en la tabla `Puertos`.
- Los **directores generales** están almacenados en la tabla `Directores`.

## Estructura del Proyecto
**Estructura de Carpetas**

src/<br>
├── controllers/<br>
├── data/<br>
├── models/ ─ json/<br>
├── routes/<br>
├── views/ ─ partials/<br>
├── app.js<br>
└── package.json

### Carpeta Cotrollers: 
Contiene los controladores para gestionar las operaciones CRUD.
- **aeropuerto.controller.js**: Controlador para los aeropuertos.
- **director.controller.js**: Controlador para los directores.
- **main.controller.js**: Controlador principal.
- **puertos.controller.js**: Controlador para la API de Airport Gap.

### Carpeta Data:
Contiene un archivo JS que hace una promesa para cargar los datos de `Airport Gap` y mostrarlos en la ruta `/puertos` como un JSON  .

### Carpeta Models:
Contiene los modelos de la base de datos.
- **JSON/**: Archivos JSON de ejemplo para cargar datos iniciales.
- **modeloTablas.js**: ORM de ambas tablas con Sequilize para poder utilizarlas.
- **tablas.sql** : Modelo de la base de datos en MySQL.
- **db.js**: Configuración de la conexión a la base de datos usando Sequilize.

### Carpeta Routes:
Contiene las rutas de la API.
- **aeropuertos.routes.js**: Rutas para los aeropuertos.
- **directores.routes.js**: Rutas para los directores.
- **main.routes.js**: Rutas principales.
- **puertos.routes.js**: Rutas para la API de Airport Gap.

### Carpeta Views:
Contiene las vistas EJS.
- **partials/**: Partes de las vistas reutilizables (`header` con un style).
- **index.ejs**: Vista principal.
- **error.ejs**: Vista de error.


## Estructura de Rutas
1. **Main**: Contiene las operaciones principales para gestionar los aeropuertos.
   ```bash
   GET http://localhost:3000/
   ```

2. **Aeropuertos**: Permite acceder y gestionar la información de los aeropuertos almacenados.
   ```bash
   GET http://localhost:3000/aeropuertos
   ```

3. **Directores**: Contiene información sobre los directores generales asociados a los aeropuertos.
   ```bash
   GET http://localhost:3000/directores
   ```

4. **Puertos (Airport Gap)**: Accede a la información de aeropuertos proporcionada por la API externa como ejemplo.
   ```bash
   GET http://localhost:3000/puertos
   ```

## Vistas EJS
- **Index**: Vista principal con la informacion de ambas tablas en la base de datos, y los enlaces a las rutas disponibles.
- **Error**: Vista de error personalizada.


## Requerimientos Específicos

### **Modelo Puertos (Aeropuertos)**
- **Propiedades:**
  - `id`: Identificador único (PK, auto-incremental).
  - `nombre`: Nombre del aeropuerto.
  - `ciudad`: Ciudad donde se encuentra el aeropuerto.
  - `pais`: País donde se encuentra el aeropuerto.
  - `categoria`: Tipo de categoría (`nacional`, `internacional`, `favorito`).
  - `status`: Estado (`active`, `inactive`).
  - `idDirector`: Identificador del director general asociado (FK).
  - `createdAt`: Fecha de creación.
  - `updatedAt`: Fecha de actualización.
- **Relaciones:**
  - Un director general puede estar asociado a múltiples aeropuertos (1:N).

### **Modelo Directores**
- **Propiedades:**
  - `id`: Identificador único (PK, auto-incremental).
  - `nombre`: Nombre del director.
  - `apellido`: Apellido del director.
  - `email`: Correo electrónico del director.
  - `createdAt`: Fecha de creación.
  - `updatedAt`: Fecha de actualización.

### **Rutas CRUD**
- **Aeropuertos (Puertos):**
  - Crear un aeropuerto: `POST /aeropuertos`
  - Leer todos los aeropuertos: `GET /aeropuertos`
  - Leer un aeropuerto por ID: `GET /aeropuertos/:id`
  - Actualizar un aeropuerto: `PUT /aeropuertos/:id`
  - Eliminar un aeropuerto: `DELETE /aeropuertos/:id`

- **Directores:**
  - Crear un director: `POST /directores`
  - Leer todos los directores: `GET /directores`
  - Leer un director por ID: `GET /directores/:id`
  - Eliminar un director: `DELETE /directores/:id`

## Funcionalidades Adicionales en Aeropuertos
1. **Paginación y Ordenamiento**:
   - Permite paginar los registros con `page` y `limit`.
   - Ordenar por fecha de creación (`ASC` o `DESC`) con `sort`.

2. **Filtrado**:
   - Filtrar aeropuertos por categoría con `type` (por ejemplo, `nacional` o `favorito`).
   - Filtrar por estado con `status` (`active`, `inactive`).

3. **Relación Autor-Aeropuerto (1:N)**:
   - Cada aeropuerto debe estar asociado a un director general existente, validado mediante `idDirector`.
   - el parametro `idDirector` en la url se debe pasar como `id`. 

### Ejemplo de URL con Parámetros
- **Ordenamiento**:
  ```bash
  GET http://localhost:3000/aeropuertos?page=1&sort=ASC
  ```
- **Filtrado**:
  ```bash
    GET http://localhost:3000/aeropuertos?type=favorito&status=active&id=1

Mas ejemplos disponibles debajo de la lista de aeropuertos en la ruta `/aeropuertos`  

## Archivos Seed (Ejemplos de Datos) 
Se incluyen archivos JSON de ejemplo para cargar datos iniciales en la carpeta `models/JSON`.:
- **aeropuertos.json**: Información de aeropuertos.
- **directores.json**: Información de directores.

## Ejemplo de Inicio
1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ./src 
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea una base de datos en MySQL:
    - tienes el modelo de la base de datos en la carpeta `models` con el nombre `tablas.sql`
    - Tambien se puede configurar las variables de entorno en un archivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=puertos
   PORT=3000
   ```

4. Inicia el servidor:
   ```bash
   npm start
   ```

5. La API estará disponible en `http://localhost:3000`. Puedes acceder al link haciendo `ctrl + click`. 

## Tecnologías Utilizadas
- **Node.js** y **Express** para el backend.
- **MySQL** y **Sequelize** para la base de datos.
- **EJS** para el renderizado de vistas.
- **Cors** para el manejo de políticas de acceso.
- **Thunder Client** para realizar pruebas de API.
- **Airport Gap API** para información de ejemplo.
