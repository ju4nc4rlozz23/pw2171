function texto(){
	alert(document.getElementById('texto1'));
}


function suma(a,b){
			return a+b;
		}

var suma2 = function(a,b){
	return a+b;
}

function suma3(a,b){
	var n1 = document.getElementById('texto1').value;
	var n2 = document.getElementById('texto2').value;
	return parseInt(n1)+parseInt(n2);
}