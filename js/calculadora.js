//JavaScript de la Calculadora

//variable global
var operador= "";

function borrar(){
	operador = "";
	document.calculadora.operando1.value = 0;
	document.calculadora.operando2.value = 0;
	document.calculadora.resultado.value = 0;
}

function operadores(ope){
	operador = ope;
}

function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;

	// if(operador == "+"){
	// 	document.calculadora.resultado.value= parseInt(valor1)+valor2;
	// }

	document.calculadora.resultado.value=eval(valor1+operador+valor2);
}

function numeros(num){
	if(operador== ""){ //Escribir en operando 1
		var valorInicial= document.calculadora.operand1.value;

		if(valorInicial == "0"){ //Elimino el cero
			document.calculadora.operando1.value = "";
		}

		//Concatena los valores de num con los del operando1
		document.calculadora.operando1.value = 
		document.calculadora.operando1 + num;
	}
	else{ //Escribir en operando 2
		var valorInicial= document.calculadora.operando2.value;

		if(valorInicial == "0"){ //Elimino el cero
			document.calculadora.operando2.value = "";
		}

		//Concatena los valores de num con los del operando1
		document.calculadora.operando2.value = 
		document.calculadora.operando2 + num;
	}
}

TAREA 
En un solo cuadro de texto
