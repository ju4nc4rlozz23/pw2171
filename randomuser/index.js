const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");

function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	    //console.log(data);
	  	$("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.last)  //si fuera tipo input se llenaria con .val
	  	$("#imgFoto").attr("src",data.results[0].picture.large)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}
$("#btnInfo").on("click",datosRandom);
