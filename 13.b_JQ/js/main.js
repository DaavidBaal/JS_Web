//Ejercicio 13b

//Pido datos al usuario mediante la función prompt


$(function (){
	$('#addBtn').click(function(){

		let sItem = $("#item").val()
		$("#lista").append("<li>" + sItem + "</li>");

	})//fin de la funcion anonima y del Evento click

}) // fin del onload

