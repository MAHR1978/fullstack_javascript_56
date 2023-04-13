//document.addEventListener("DOMContentLoaded", function() {

	function validar_formulario(){
		//let nombre=document.getElementById('#name').value();
		var	nombre=document.getElementById('name').value;
		var telefono=document.getElementById('telefono').value;
		var mail=document.getElementById('mail').value;
		var email=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var mensaje=document.getElementById('msg').value;
		if(nombre=='')
		{
			alert("el nombre no puede ir vacio");
			document.getElementById('name').focus();
		}
		else if(telefono=='')
		{
			alert("el campo telefono no puede ir vacio");
			document.getElementById('telefono').focus();
		}
		else if(mail=='')
		{
			alert("el campo email no puede ir vacio")
		}
		else if(email.test(mail) == false)
		{
			alert("este no es un email")
		}
		else if(mensaje=='')
		{
			alert("el mensaje ")
		}		
	}
	$(document).ready(function(){
		//var $ = require( 'jquery' );
		//var DataTable = require( 'datatables.net' )(window, $);
	 
		let table = new DataTable('#myTable', {
			 language: {
				"decimal": "",
				"emptyTable": "No hay información",
				"info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
				"infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
				"infoFiltered": "(Filtrado de _MAX_ total entradas)",
				"infoPostFix": "",
				"thousands": ",",
				"lengthMenu": "Mostrar _MENU_ Entradas",
				"loadingRecords": "Cargando...",
				"processing": "Procesando...",
				"search": "Buscar:",
				"zeroRecords": "Sin resultados encontrados",
				"paginate": {
					"first": "Primero",
					"last": "Ultimo",
					"next": "Siguiente",
					"previous": "Anterior"
				}
			}
		// config options...
		});
			
	})
	
	

