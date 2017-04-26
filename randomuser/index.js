const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");

function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	    //console.log(data);
	  	$("#txtNombre").html(data.results[0].name.first+" "+
	  						 data.results[0].name.last)  //si fuera tipo input se llenaria con .val
	  	
	  	$("#imgFoto").attr("src",data.results[0].picture.large)
	  	
	  	$("#location").html(data.results[0].location.street +", "+
	  						data.results[0].location.city   +", "+
	  						data.results[0].location.state  +", "+
	  						data.results[0].location.postcode)
	  	$("#email").html(data.results[0].email)
	  	$("#login").html("Username: "+data.results[0].login.username +" "+
	  					 "Password: "+data.results[0].login.password +" "+
	  					 "Salt: "    +data.results[0].login.salt     +" "+
	  					 "MD5: "     +data.results[0].login.md5      +" "+
	  					 "Sha1: "    +data.results[0].login.sha1     +" "+
	  					 "Sha256: "  +data.results[0].login.sha256)
	  	$("#dob").html(data.results[0].dob)
	    $("#regi").html(data.results[0].registered)
	  	$("#phone").html(data.results[0].phone)
	  	$("#cell").html(data.results[0].cell)	 
	   	$("#aidi").html("Name: "  +data.results[0].id.name +" "+
	   					"Value: " +data.results[0].id.value)
	   

	   	$("#info").html("Seed:"    +data.info.seed     +"<br>"+
	   				    "Results:" +data.info.results  +"<br>"+
	   				    "Page: "   +data.info.page     +"<br>"+
	   				    "Version: "+data.info.version  );
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}
$("#btnInfo").on("click",datosRandom);
