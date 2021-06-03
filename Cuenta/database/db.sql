/* Creating the database */
CREATE DATABASE banco;

/* using the database */
use banco;

/* Creating a table */
CREATE TABLE cuenta ( 
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    numero_cuenta INT(30) NOT NULL,
    tipo_cuenta VARCHAR(50) NOT NULL,
)
