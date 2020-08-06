/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/


function mostrar()
{
	let articulo;
	let categoria;
	let precio;
	let precioMax;
	let precioMin;
	let respuesta;
	do{
		articulo = prompt("Ingrese el nombre de un artículo de la categoría almacen, lacteos, limpieza o bebidas");
		categoria = prompt("Ingrese la categoría de su artículo (almacen, lacteos, limpieza o bebida");
		precio = parseFloat(prompt("Ingrese el precio del artículo"));

		precioMax = precio;
		respuesta = prompt("Desea ingresar otro articulo? si/no");

	}while(respuesta == "si");


}