/* Creating the database */
CREATE DATABASE banco;

/* using the database */
use banco;

/* Creating a table */
CREATE TABLE cliente ( 
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    tipo_identifiacion VARCHAR(50) NOT NULL,
    numero_identifiacion INT(30) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    razon_social VARCHAR(50) NOT NULL,
    municipio VARCHAR(50) NOT NULL,
)
