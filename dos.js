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


function mostrar() {

	let articulo
	let categoria
	let precio
	let precioMax;
	let resp
	let bandera = 0;
	let articuloMax;
	let articuloLacteo;
	let contadorBebidas = 0;

	do {
		articulo = prompt("Ingrese el nombre de un artículo");
		categoria = prompt("Ingrese una categoría")
		while (categoria != "lacteos" && categoria != "limpieza" && categoria != "almacen" && categoria != "bebidas") {
			alert("Categoría invalida");
			categoria = prompt("Ingrese una categoría")

		}

		precio = parseFloat(prompt("Ingrese el precio"));
		while (!(precio >= 0 && precio <= 1000)) {
			alert("Precio inválido");
			precio = parseFloat(prompt("Ingrese el precio"));
		}

		if (bandera == 0) {
			precioMax = precio;
		}

		bandera = 1;

		if (precio > precioMax) {
			precioMax = precio;
			articuloMax = articulo;
			if (categoria == "lacteos") {
				articuloLacteo = articulo;
			}
		}

		if (categoria == "bebidas") {
			contadorBebidas++;
		}


		resp = prompt("Desea ingresar otro artículo? si/no");

	} while (resp == "si");


	console.log("El artículo " + articuloMax + " fue el de mayor precio, siendo este $" + precioMax + "\n" + "El artículo lacteo de mayor precio fue " + articuloLacteo + "\n" + "La cantidad de bebidas ingresadas fue de " + contadorBebidas);

}