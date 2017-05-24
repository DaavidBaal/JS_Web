

window.onload = function (){
	document.querySelectorAll("section")[1].innerHTML += "<p>Hola mundo</p>"
	document.querySelectorAll("section")[1].outerHTML += "<p>Adios mundo</p>"
}