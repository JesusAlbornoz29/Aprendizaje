-- //////////////////////////////////////////////////////////////movies_db/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- EJERCICIO 1 DE MOVIES_DB

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

-- ////////////////////////////////////////////////////////////////////////////////////Emarket/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- BASE DE DATOS EMARKET
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
select *
from facturas 
inner join empleados 
on facturas.EmpleadoID = empleados.EmpleadoID
where empleados.Apellido = 'Buchanan';
-- 2 GENERAR UN LISTADO CON TODOS LOS CAMPOS DE LAS FACTURAS DEL CORREO 'Speedy Express'
select * 
from facturas
inner join correos
on correos.CorreoID = facturas.EnvioVia
where correos.Compania = 'Speedy Express';
-- 3 GENERAR UN LISTADO DE TODAS LAS FACTURAS CON EL NOMBRE Y APELLIDO DE LOS EMPLEADOS 
select facturas.FacturaID, empleados.Nombre, empleados.Apellido
from facturas
inner join empleados
on facturas.EmpleadoID = empleados.EmpleadoID;
-- 4 MOSTRAR UN LISTADO DE LAS FACTURAS DE TODOS LOS CLIENTES "Owner" Y PAIS DE ENVIO "USA"
select *
from facturas
inner join clientes
on facturas.ClienteID = clientes.ClienteID
where clientes.titulo = 'Owner' and clientes.Pais = 'USA';
-- 5 MOSTRAR TODOS LOS CAMPOS DE LAS FACTURAS DEL EMPLEADO CUYO APELLIDO SEA 'Leverling' o que incluyan el producto id ='42'
select  *
from facturas
inner join empleados
on facturas.EmpleadoID = empleados.EmpleadoID
inner join facturadetalle
on facturas.FacturaID = facturadetalle.FacturaID
where empleados.Apellido = 'Leverling' 
or facturadetalle.ProductoID = 42 ;
-- 6 MOSTRAR TODOS LOS CAMPOS DE LAS FACTURAS DEL EMPLEADO CUYO APELLIDO SEA 'Leverling' y que incluya los productos id = '80' o '42'
-- 7 GENERAR UN LISTADO CON LOS CINCO MEJORES CLIENTES, SEGUN SUS IMPORTES DE COMPRAS TOTAL (PrecioUnitaro * Cantidad).
-- 8 GENERAR UN LISTADO DE FACTURAS, CON LOS CAMPOS ID, NOMBRE Y APELLIDO DEL CLIENTE, FECHA DE FACTURA, PAIS DE ENVIO, TOTAL, ORDENADO EDE MANERA DESCENDENTE POR FECHA DE FACTURA Y LIMITADO A 10 FILAS


-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- BASE DE DATOS MUSIMUNDOS
-- CONSULTAS SELECT Y GROUP BY
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


-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- Grupo 12
-- Vistas - Parte I
-- Clientes

-- 1. Crear una vista con los siguientes datos de los clientes: ID, contacto, y el Fax. En caso de que no tenga Fax, colocar el teléfono, pero aclarándolo. Por ejemplo: “TEL: (01) 123-4567”.
CREATE VIEW v_cliente_fax AS
SELECT ClienteID, Contacto,
CASE
	WHEN Fax = '' THEN CONCAT('TEL: ', Telefono)
    ELSE Fax
END AS Fax_Tel
FROM clientes;

select * from v_cliente_fax;
-- 2. Se necesita listar los números de teléfono de los clientes que no tengan fax. Hacerlo de dos formas distintas:
-- a. Consultando la tabla de clientes.
select Telefono, ClienteID
from clientes
where Fax = '';
-- b. Consultando la vista de clientes.
create view consulta as
select Telefono, ClienteID
from clientes
where Fax = '';

select * from consulta;

-- Proveedores

-- 1. Crear una vista con los siguientes datos de los proveedores: ID, contacto, compañía y dirección. Para la dirección tomar la dirección,ciudad, código postal y país.
create view consulta2 as
select ProveedorID, Contacto, Compania, concat(Direccion, ' ', Ciudad, ' ', CodigoPostal, ' ', Pais) 
as DireccionCompleta
from proveedores;

select * from consulta2;

-- 2. Listar los proveedores que vivan en la calle Americanas en Brasil. Hacerlo de dos formas distintas:
-- a. Consultando la tabla de proveedores.
select *
from proveedores
where Direccion like '%Americanas%'
and Pais like 'Brazil';
-- b. Consultando la vista de proveedores.
create view consulta3 as
select *
from proveedores
where Direccion like '%Americanas%'
and Pais like 'Brazil';

select * from consulta3;


-- Vistas - Parte II
-- 1. Crear una vista de productos que se usará para control de stock. Incluir el ID y nombre del producto, el precio unitario redondeado sin decimales, las unidades en stock y las unidades pedidas. 
-- Incluir además una nueva columna PRIORIDAD con los siguientes valores:
-- ■ BAJA: si las unidades pedidas son cero.
-- ■ MEDIA: si las unidades pedidas son menores que las unidades en stock.
-- ■ URGENTE: si las unidades pedidas no duplican el número de unidades.
-- ■ SUPER URGENTE: si las unidades pedidas duplican el número de unidades en caso contrario.

create view VistaControlDeStock as
select ProductoID, ProductoNombre, format(PrecioUnitario,0) as costo, UnidadesStock as Stock, UnidadesPedidas as Pedido,
case
	when UnidadesPedidas = 0 then 'baja'
    when UnidadesPedidas < UnidadesStock then 'media'
    when UnidadesPedidas < UnidadesStock*2 then 'urgente'
    when UnidadesPedidas*2 >= UnidadesStock then 'superurgente'
end as Prioridad
from productos;

select * from VistaControlDeStock;

-- 2. Se necesita un reporte de productos para identificar problemas de stock. Para cada prioridad indicar cuántos productos hay y su precio promedio.
-- No incluir las prioridades para las que haya menos de 5 productos.




-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- 14 - DML- queries agregadas 
-- Consultas BASE DE DATOS MOVIES
-- Join
-- 1. Utilizando la base de datos de movies, queremos conocer, por un lado, los
-- títulos y el nombre del género de todas las series de la base de datos.
-- 2. Por otro, necesitamos listar los títulos de los episodios junto con el nombre y
-- apellido de los actores que trabajan en cada uno de ellos.
-- 3. Para nuestro próximo desafío, necesitamos obtener a todos los actores o
-- actrices (mostrar nombre y apellido) que han trabajado en cualquier película
-- de la saga de La Guerra de las galaxias.
-- 4. Crear un listado a partir de la tabla de películas, mostrar un reporte de la
-- cantidad de películas por nombre de género.

-- //// Ejercicios con Base de datos la_aprobacion

-- Consigna - CheckPoint II
-- 1. Listar todos los huéspedes cuyo nombre comience con la letra "S". Se debe mostrar id como "Número de huésped", apellido y nombre.
select id as numero_de_huesped, apellido,nombre from huesped where nombre like 'S%';
-- 2. Mostrar el número de legajo del empleado con domicilio "Av. Rosalind Franklin 600".
select legajo from empleado where domicilio = 'Av. Rosalind Franklin 600';
-- 3. Se requiere saber cuál es el mayor importe registrado en las reservas.
select importe from reserva order by importe asc limit 1;
-- 4. Listar las reservas realizadas con números 15, 19, 21, 35.
select * from reserva where id='15' or id='19' or id='21' or id='35';
-- 5. Calcular el importe total recaudado para la habitación número 40. 
-- El reporte debe tener dos columnas denominadas "Número de habitación" y el "Importe Total".
select habitacion_numero as numero_de_habitación, sum(importe) as Importe_total from checkin where habitacion_numero = 40;
-- 6. Listar de manera ordenada (fecha de nacimiento), los empleados que no pertenezcan al sector 3 y que la fecha de nacimiento sea mayor que 3/9/1989 o igual a 7/11/1986.
select * from empleado where sector_id!=3 and fecha_nacimiento>'1989-09-03' or fecha_nacimiento='1986-11-07' order by fecha_nacimiento;
-- 7. Listar los importes de las reservas con valor entre $10499,50 a $12000,00
-- (ordenarlos por el importe de mayor a menor).
select importe from reserva where importe between 10499.50 and 12000.00 order by importe desc;
-- 8. Mostrar el quinto importe del check-in realizado con menor valor.
select id, importe from checkin order by importe, id limit 1 offset 4;
-- 9. Mostrar el check-in con mayor importe. Este reporte debe contener el número
-- del check-in, fecha de entrada y el importe.
select id, fecha_entrada, max(importe) as importe from checkin;
-- 10. Mostrar las diez reservas con menor importe. Este reporte debe contener el
-- número de reserva, importe y el número del servicio.
select id, importe, servicio_extra_id from reserva order by importe, id limit 10;
-- 11. Listar las reservas registradas entre 14/07/21 al 15/08/21 (ordenarlos por fecha)
select * from reserva where fecha between '2021-07-14' and '2021-08-15' order by fecha;
-- 12. Listar en forma ordenada los check-in que tengan un importe superior o igual a
-- $34125,00 y con fecha de salida inferior a 26/6/2020.
select * from checkin where importe>=34125 and fecha_salida<'2020-06-26' order by importe;
-- 13. Listar todos los empleados cuyo nombre termine con los caracteres "ia". Se debe
-- mostrar el legajo, apellido, nombre y teléfono móvil.
select legajo, apellido, nombre, telefono_movil from empleado where nombre like '%ia';
-- 14. Se desea conocer cuál es el importe promedio de las reservas que se hayan
-- pagado en efectivo.
select avg(importe) from reserva where forma_pago_id=1;
-- 15. Mostrar el tercer check-in con mayor importe pagado con tarjeta de crédito.
select * from checkin where forma_pago_id=3 order by importe desc limit 1 offset 2;
-- 16. Calcular la cantidad de check-in que tiene la habitación número siete. El reporte
-- debe tener dos columnas denominadas "Habitación" y el "Cantidad".
select habitacion_numero as habitacion, count(*) as cantidad from checkin where habitacion_numero=7;
-- 17. Mostrar todos los domicilios de los huéspedes que contengan una palabra de cinco caracteres
-- pero el tercer carácter debe ser igual a "n".
select domicilio from huesped where domicilio like'__n__';
-- 18. Modificar el tipo de decoración "italiana" por "romana"
update decoracion set nombre='Romana' where nombre ='Italiana';
-- 19. Agregar al huésped  Ricardo Omar cuyo pasaporte es 28001555 y
-- fecha de nacimiento 5/1/1980, domiciliado en calle Av. Sarmiento 752 este -
-- Argentina, teléfono móvil +542645667714 y el correo electrónico es
-- pal1980sj@gmail.com.
insert into huesped (id, apellido, nombre, pasaporte, fecha_nacimiento, domicilio, pais_id, telefono_movil, email)
values (default, 'Palermo Díaz', 'Ricardo Omar', 28001555, '1980-01-05', 
'Av. Sarmiento 752 este', 1, '+542645667714', 'pal1980sj@gmail.com');
select * from huesped where apellido like '%lerm%';
-- 20. Eliminar el registro del servicio básico número 5
delete from servicio_basico where nombre =5;

-- //////////////////////////////////////////////////////////////BASE DE DATOS SEKILA////////////////////////////////////////////////////////////////////////////
-- ////////// REPORTES JOINS
-- 1. Obtener los artistas que han actuado en una o mas peliculas.
select  * from actor inner join film_actor on actor.actor_id = film_actor.film_id;
-- 2. Obtener las peliculas donde han participado mas de un artista segun nuestra base de datos.
select film.film_id, count(film_actor.actor_id) as cantidad_de_actores 
from film 
inner join film_actor on film.film_id = film_actor.film_id 
group by film.film_id
having cantidad_de_actores > 1;
-- 3. Obtener aquellos artistas que han actuado en alguna pelicula, incluso aquellos que aun no lo han hecho, segun nuestra base de datos. ///// DUDA ////
select * 
from actor 
left join film_actor 
on actor.actor_id = film_actor.actor_id; 
-- 4. Obtener las peliculas que no se le han asignado artistas en nuestra base de datos.
select *
from film
left join film_actor 
on film.film_id = film_actor.film_id 
where film_actor.film_id is null;
-- 5. Obtener aquellos artistas que no han actuado en alguna pelicula, segun nuestra base de datos. ///// DUDA ////
select actor.actor_id, actor.first_name as nombre , actor.last_name as apellido, film_actor.film_id
from actor
left join film_actor
on film_actor.actor_id = actor.actor_id
where film_actor.film_id is null;
-- 6. Obtener aquellos artistas que han actuado en dos o mas peliculas segun nuestra base de datos.
-- 7. Obtener aquellas peliculas que tengan asignado uno o mas artistas, incluso aquellas que aun no le han asignado un artista en nuestra base de datos.
-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-- //REPORTES 1
-- 1. Obtener el nombre y apellido de los primeros 5 actores disponibles. Utilizar alias para mostrar los nombres de las columnas en espa;ol.
-- 2. Obtener un listado que incluya nombre, apellido y correo electronico de los clientes (customers) inactivos. Utilizar alias para mostrar los nombres de las columnas en espa;ol.
-- 3. Obtener un listado de films incluyendo titulo, a;o y descripcion de los films que tienen un rental_duration mayor a cinco. Ordenar por erntal_duration de mayor a menor. Utilizar alias para mostrar los nombres de las columnas en espa;ol.
-- 4. Obtener un listado de alquileres (rentals) que se hicieron durante el mes de mayo de 2005. incluir en el resultado las columnas disponibles. 
-- //REPORTES 2 Sumamos complejidad
-- 1. Obtener la cantidad TOTAL de alquileres (rentals). Utiliza un alias para mostrarlo en una columna llamada "Cantidad".
-- 2. Obtener la suma TOTAL de todos los pagos (payments). Utilizar un alias para mostrarlo en una columna llamada "total", junto a una columna con la cantidad de alquileres con el alias "Cantidad" y una columna que indique el "Importe promedio" por alquiler.
-- 3. Genere un reporte que responda la pregunta "Cuales son los diez clientes que mas dinero gastan y en cuantos alquileres lo hacen?"
-- 4. Genere un reporte que indique: ID de cliente, cantidad de alquileres y monto total para todos los clientes que hayan gastado mas de 150 dolares en alquileres.
-- 5. Genere u nreporte que muestre por mes de alquiler (rental_date de tabla rental), la cantidad de alquileres y la suma total pagada (amount de tabla paymen) para el a;o de alquiler 2005 (rental_date de tabla rental).
-- 6. Generar un reporte que responda la pregunta: "Cuales son los 5 inventarios mas alquilados?" (columna inventory_id en la tabla rental). Para cada una de ellas indicar la cantidad de alquileres.





