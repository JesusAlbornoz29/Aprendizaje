
-- EJERCICIO 1 DE movies_db

-- SELECT 
-- 1 MOSTRAR TODOS LOS REGISTROS DE LA TABLA DE MOVIES.
select * from movies;
-- 2 MOSTRAR EL NOMBRE, APELLIDO Y RATING DE TODOS LOS ACTORES.
select first_name as nombre, last_name as apellido, rating from actors;
-- 3 MOSTRAR EL TITULO DE TODAS LAS SERIES.
select title as titulo from series;

-- WHERE Y ORDER BY
-- 4 MOSTRAR EL NOMBRE Y EL APELLIDO DE LOS ACTORES CUYO RATING SEA MAYOR A 7,5
select first_name as nombre, last_name as apellido, rating from actors where rating > 7.5;
-- 5 MOSTRAR EL TITULO DE LAS PELICULAS, EL RATING Y LOS PREMIOS DE LAS PELICULAS CON RATING MAYOR A 7,5 Y CON MAS DE DOS PREMIOS.
select title as titulo, rating, awards as premios from movies where rating > 7.5 and awards > 2;
-- 6 MOSTRAR EL TITULO DE LAS PELICULAS Y EL RATING ORDENADAS POR RATING EN FORMA ASCENDENTE.
select title as titulo, rating from movies order by rating asc;

-- BETWEEN Y LIKE
-- 7 MOSTRAR EL TITULO Y RATING DE TODAS LAS PELICULAS CUYO TITULO INCLUYA TOY STORY.
select title as titulo, rating from movies where title = 'Toy Story';
-- 8 MOSTRAR A TODOS LOS ACTORES CUYOS NOMBRES EMPIECEN CON SAM
select first_name as nombre, last_name as apellido from actors where first_name = 'Sam';
-- 9 MOSTRAR EL TITULO DE LAS PELICULAS QUE SALIERON ENTRE EL '2004-01-01' Y '2008-12-31'
select title as titulo, release_date as fecha from movies where release_date between '2004-01-01' and '2008-12-31' order by release_date asc;

-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- EJERICIO 2
-- CONSULTAS
-- ALIAS, LIMIT Y OFFSET
-- 1 MOSTRAR EL TITULO DE TODAS LAS SERIES Y USAR ALIAS PARA QUE EL NOMBRE DEL CAMPO ESTE EN ESPA;OL
select title as titulo from series; 
-- 2 TRAER EL TITULO DE LAS PELICULAS CON EL RATING MAYOR A 3, CON MAS DE 1 PREMIO Y CON FECHA DE LANZAMIENTO ENTRE EL A;O '1988-01-01' AL '2009-12-31' ORDENAR LOS RESULTADOS POR RATING DESCENDENTE
select title as titulo, rating, awards as preimios, release_date as fecha from movies where awards > 1 and release_date between '1988-01-01' and '2009-12-31' order by rating desc;
-- 3 TRAER EL TOP 3 A PARTIR DEL REGISTRO 10 DE LA CONSULTA ANTERIOR.
select title as titulo, rating, awards as preimios, release_date as fecha from movies where awards > 1 and release_date between '1988-01-01' and '2009-12-31' order by rating desc limit 3 ;
-- 4 CUALES SON LOS 3 PEORES EPISODIOS TENIENDNO EN CUENTA SU RATING? 
select title as titulo, rating, awards as preimios, release_date as fecha from movies where awards > 1 and release_date between '1988-01-01' and '2009-12-31' order by rating asc limit 3 ;
-- 5 OBTENER EL LISTADO DE TODOS LOS ACTORES. QUITAR LAS COLUMNAS DE FECHAS Y PELICULA FAVORITA, ADEMAS TRADUCIR LOS NOMBRES DE LAS COLUMNAS.
select first_name as nombre, last_name as apellido from actors;


-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- EJERCICIO 3
-- 1 cuantas peliculas hay?
select count(id) from movies;
-- 2 cuantas peliculas tienen entre 3 y 7 premios?
select count(id) from movies where awards between 3 and 7 ;
-- 3 cuantas peliculas tienen entre 3 y 7 premios y un rating mayor a 7?
select count(id) from movies where awards between 3 and 7 and rating > 7;
-- 4 crear un listado a partir de la tabla de peliculas, mostrar un reporte de la cantidad de pelicualas por id de genero
select genre_id, count(id) from movies group by genre_id;
-- 5 de la consulta anterior, listar solo aquellos generos que tengan como suma de premios un numero mayor a 5
select genre_id, count(id),rating from movies group by genre_id having rating > 5;

-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

-- Consultas queries XL parte I - GROUP BY
-- CONSIGNAS 
-- CLIENTES
-- 1 CUANTOS CLIENTES EXISTEN?
SELECT count(ClienteID) from clientes;
-- 2 CUANTOS CLIENTES HAY POR CIUDAD?
select count(ClienteID), Ciudad from clientes group by Ciudad;

-- FACTURAS
-- 1 CUAL ES EL TOTAL DE TRANSPORTE?
select sum(transporte) from facturas;
-- 2 CUAL ES EL TOTAL DE TRANSPORTE POR EnvioVia (EMPRESA DE ENVIO)?
select sum(transporte),EnvioVia from facturas group by EnvioVia;
-- 3 CALCULAR LA CANTIDAD DE FACTURAS POR CLIENTE. ORDENAR DESCENDENTEMENTE POR CANTIDAD DE FACTURAS.
select count(FacturaID),ClienteID from facturas group by ClienteID order by count(FacturaID) desc;
-- 4 OBTENER EL TOP 5 DE CLIENTES DE  ACUERDO A SU CANDIDAD DE FACTURAS
select count(FacturaID),ClienteID from facturas group by ClienteID order by count(FacturaID) desc limit 5;
-- 5 CUAL ES EL PAIS DE ENVIO MENOS FRECUENTE DE ACUERDO A LA CANTIDAD DE FACTURAS?
select PaisEnvio, count(FacturaID) from facturas group by PaisEnvio order by count(FacturaID) limit 1;
-- 6 SE QUIERE OTROGAR UN BONO AL EMPLEADO CON MAS VENTAS. QUE ID DE EMPLEADO REALIZO MAS OPERACIONES DE VENTAS?
select EmpleadoID, count(FacturaID) from facturas group by EmpleadoID order by count(FacturaID) desc limit 1;

-- FACTRA DETALLE
-- 1 CUAL ES EL PRODUCTO QUE APARECE EN MAS LINEAS DE LA TABLA FACTURA DETALLE?
select count(ProductoID) as Cantidad, ProductoID
from facturadetalle
group by ProductoID
Order by Cantidad desc
limit 1;
-- 2 CUAL ES EL TOTAL FACTURADO?? CONSIDERAR QUE EL TOTAL FACTURADO ES LA SUMA DE CANTIDAD POR PRECIO UNITARIO.
select sum(cantidad * PrecioUnitario) as TotalFacturado from facturadetalle;
-- 3 CUAL ES EL TOTAL FACTURADO PARA LIS PRODUCTOS ID ENTRE 30 Y 50?
select sum(cantidad * PrecioUnitario) as TotalFacturado from facturadetalle where ProductoID between 30 and 50;
-- 4 CUAL ES EL PRECIO UNITARIO PROMEDIO DE CADA PRODUCTO?
select avg(PrecioUnitario) as Promedio, ProductoID from facturadetalle group by ProductoID;
-- 5 CUAL ES EL PRECIO UNITARIO MAXIMO?
select PrecioUnitario from facturadetalle order by PrecioUnitario desc limit 1; 

-- CONSULTAS QUERIES XL PARTE II - JOIN

-- 1 GENERAR UN LISTADO DE TODAS LAS FACTURAS DEL EMPLEADO 'BUCHANAN'
-- 2 GENERAR UN LISTADO CON TODOS LOS CAMPOS DE LAS FACTURAS DEL CORREO 'Speedy Express'
-- 3 GENERAR UN LISTADO DE TODAS LAS FACTURAS CON EL NOMBRE Y APELLIDO DE LOS EMPLEADOS 
-- 4 MONTAS UN LISTADO DE LAS FACTURAS DE TODOS LOS CLIENTES "Owner" Y PAIS DE ENVIO "USA"
-- 5 MOSTRAR TODOS LOS CAMPOS DE LAS FACTURAS DEL EMPLEADO CUYO APELLIDO SEA 'Leverling' o que incluyan el producto id ='42'
-- 6 MOSTRAR TODOS LOS CAMPOS DE LAS FACTURAS DEL EMPLEADO CUYO APELLIDO SEA 'Leverling' y que incluya los productos id = '80' o '42'
-- 7 GENERAR UN LISTADO CON LOS CINCO MEJORES CLIENTES, SEGUN SUS IMPORTES DE COMPRAS TOTAL (PrecioUnitaro * Cantidad).
-- 8 GENERAR UN LISTADO DE FACTURAS, CON LOS CAMPOS ID, NOMBRE Y APELLIDO DEL CLIENTE, FECHA DE FACTURA, PAIS DE ENVIO, TOTAL, ORDENADO EDE MANERA DESCENDENTE POR FECHA DE FACTURA Y LIMITADO A 10 FILAS







-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- DATA BASE SPOTYFI
-- Realizar los siguientes informes:

-- 1 Listar las canciones que poseen la letra “z” en su título.
select titulo from cancion ;
-- 2 Listar las canciones que poseen como segundo carácter la letra “a” y como último, la letra “s”.
-- 3 Mostrar la playlist que tiene más canciones, renombrando las columnas poniendo mayúsculas en la primera letra, los tildes correspondientes y agregar los espacios entre palabras.
-- 4 En otro momento se obtuvo un listado con los 5 usuarios más jóvenes, obtener un listado de los 10 siguientes.
-- 5 Listar las 5 canciones con más reproducciones, ordenadas descendentemente.
-- 6 Generar un reporte de todos los álbumes ordenados alfabéticamente.
-- 7 Listar todos los álbumes que no tengan imagen, ordenados alfabéticamente.
-- 8 Insertar un usuario nuevo con los siguientes datos (tener en cuenta las relaciones):
-- a) nombreusuario: nuevousuariodespotify@gmail.com

-- b) Nombre y apellido: Elmer Gomez

-- c) password: S4321m

-- d) Fecha de nacimiento: 15/11/1991

-- e) Sexo: Masculino

-- f) Código Postal: B4129ATF

-- g) País: Colombia

-- 9 Eliminar todas las canciones de género “pop”.
-- 10 Editar todos los artistas que no tengan una imagen cargada y cargarles el texto “Imagen faltante” en la columna de imagen.

-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////














-- Equipo 3 
-- Alfredo Albornoz; Romina Rodriguez; Analia Mogliazza; Agustin Perera; Valentina Villamonte; Julian Delgado

-- 1. Listar las canciones cuya duración sea mayor a 2 minutos.
select * from canciones where milisegundos > 120000;
-- 2. Listar las canciones cuyo nombre comience con una vocal.
select * from canciones where nombre like "a%" or nombre like "e%" or nombre like "i%" or nombre like "o%" or nombre like "u%" order by nombre asc;
-- 3. Listar las canciones ordenadas por compositor en forma descendente. 
select * from canciones order by compositor asc;
-- Luego, por nombre en forma ascendente. Incluir únicamente aquellas canciones que tengan compositor.
select nombre from canciones where compositor is not null order by nombre asc;
-- 4. a) Listar la cantidad de canciones de cada compositor.
select count(nombre), compositor from canciones group by compositor;
-- b) Modificar la consulta para incluir únicamente los compositores quetengan más de 10 canciones.

-- 5. a) Listar el total facturado agrupado por ciudad. 
select ciudad_de_facturacion as ciudad, sum(total) from facturas group by ciudad_de_facturacion order by ciudad_de_facturacion asc;
-- b) Modificar el listado del punto (a) mostrando únicamente las ciudades de Canadá. CANADA ES UN PAIS NO CIUDAD DA ERROR
select ciudad_de_facturacion as ciudad, sum(total) from facturas group by ciudad_de_facturacion order by ciudad_de_facturacion asc;
-- c) Modificar el listado del punto (a) mostrando únicamente las ciudades con una facturación mayor a 38.
select ciudad_de_facturacion as ciudad, sum(total) from facturas where total > 18 group by ciudad_de_facturacion order by ciudad_de_facturacion asc;
-- d) Modificar el listado del punto (a) agrupando la facturación por país, y luego por ciudad.
select ciudad_de_facturacion as ciudad, sum(total) from facturas group by ciudad_de_facturacion order by ciudad_de_facturacion asc;
-- 6. a) Listar la duración mínima, máxima y promedio de las canciones.
select min(milisegundos), max(milisegundos), avg(milisegundos) from canciones;
-- b) Modificar el punto (a) mostrando la información agrupada por género.
select nombre, min(milisegundos), max(milisegundos), avg(milisegundos) from canciones group by id_genero order by nombre asc;


-- Repasando DML consultas a varias tablas
-- Table reference
select clientes.id, clientes.primer_nombre, facturas.id 
from clientes,facturas 
where clientes.id = facturas.id_cliente;

-- JOIN, INNER JOIN
select clientes.id, clientes.primer_nombre as nombre, facturas.id as facturaid 
from clientes
inner join facturas;

-- DISTINCT
select distinct clientes.id, clientes.primer_nombre as nombre, facturas.id as facturaid 
from clientes
inner join facturas;




