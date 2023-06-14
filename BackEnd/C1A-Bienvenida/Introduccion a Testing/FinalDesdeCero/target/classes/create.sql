CREATE TABLE IF NOT EXISTS DOMICILIO (
ID INT AUTO_INCREMENT NOT NULL,
CALLE VARCHAR(100) NOT NULL,
NUMERO VARCHAR(100) NOT NULL,
LOCALIDAD VARCHAR(100) NOT NULL,
PROVINCIA VARCHAR (100) NOT NULL,
PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS ODONTOLOGO (
ID INT AUTO_INCREMENT NOT NULL,
APELLIDO VARCHAR(100) NOT NULL,
NOMBRE VARCHAR(100) NOT NULL,
MATRICULA VARCHAR (100) NOT NULL,
PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS PACIENTE (
ID INT AUTO_INCREMENT NOT NULL,
APELLIDO VARCHAR (100) NOT NULL,
NOMBRE VARCHAR (100) NOT NULL,
ID_DOMICILIO INT NOT NULL,
DNI VARCHAR(100) NOT NULL,
FECHA_INGRESO TIMESTAMP WITHOUT TIME ZONE NOT NULL,
PRIMARY KEY (ID),
CONSTRAINT FK_DOMICILIO_PACIENTE FOREIGN KEY (ID_DOMICILIO) REFERENCES DOMICILIO(ID)
);