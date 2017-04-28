const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");

var buscarPersonaje = function(){
	var personaje = $("#txtPersonaje").val();
	var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	var cantidadComics = 0
	var cadenaComics   = ""

	if(personaje == ""){
		alert("Ingrese el personaje")
		$("#txtPersonaje").focus();
		return //nos salimos de la funcion buscarpersonaje y Ya no continua con la función 
	}
	url=url+personaje;
	$.ajax({
		dataType: "json",
		url: url, //queremos una url que esta en la variable url
		success:function(response){ //response es nuestra respuesta json
			if(response.code==200){ //ok.cat
				$("#imgFoto").show("slow");
				$("#imgFoto").attr("src",response.data.results[0].thumbnail.path+"."+
										 response.data.results[0].thumbnail.extension);
				//dejo de funcionar desde aqui
				$("#txtNombre").html(response.data.results[0].name);
				$("#txtDescription").html("");
				//validamos si hay o no descripción del personaje
				if(response.data.results[0].description!=""){
					$("#txtDescription").html("<b>Descripción: <b>"+response.data.results[0].description+"<br>");
				}
				cantidadComics=response.data.results[0].comics.returned;
				for(var i=0; i<cantidadComics;i++){
					cadenaComics+=response.data.results[0].comics.items[i].name+"<br>"
				}
				$("#txtComics").html("<b>Comics: <b><br>"+cadenaComics);

			}
		}
	})
}


//Posiciona el cursos en el cuadro de texto
$("#txtPersonaje").focus();
//Evento del botón btnBuscar-click
$("#btnBuscar").on("click",buscarPersonaje);