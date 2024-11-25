CREATE DATABASE tp2_prog;
USE tp2_prog; 

-- Se le tiene que pasar un nombre, ciudad, pais y status
CREATE TABLE Puertos(
id INT PRIMARY KEY AUTO_INCREMENT, 
nombre VARCHAR(50) NOT NULL, 
ciudad VARCHAR(30) NOT NULL, 
pais VARCHAR(30) NOT NULL, 
createdAt DATE, 
updatedAt DATE, 
categoria ENUM("favorito", "pais", "ciudad"),
status_port ENUM("active", "inactive") NOT NULL,
idDirector INT, 
FOREIGN KEY (idDirector) REFERENCES Directores(id)
); 

-- Modelo director (director general de aviacion) (1:N)
-- se le pasa solo nombre y apellido
CREATE TABLE Directores(
id INT PRIMARY KEY AUTO_INCREMENT, 
createdAt DATE, 
updatedAt DATE, 
nombre VARCHAR(30) NOT NULL, 
apellido VARCHAR(30) NOT NULL, 
email VARCHAR(40) CONSTRAINT validarMail CHECK(LOCATE("@", email) > 0)
); 
