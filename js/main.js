function mostrarData(){
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var correo = document.getElementById("email").value;
	var direccion = document.getElementById("address").value;
	var telefono = document.getElementById("phone").value;
	var seleccion = document.getElementById("select-product").value;

	document.getElementById("clientes").innerHTML = "<h3> Datos del Cliente: </h3>" + 
			"<br><strong>Nombre: </strong>" + nombre + " " + apellido + 
			"<br><strong>Correo: </strong>" + correo +
			"<br><strong>Dirección: </strong>" + direccion + 
			"<br><strong>Teléfono: </strong>" + telefono +
			"<br><strong>Producto escogido: </strong>" + seleccion;

}