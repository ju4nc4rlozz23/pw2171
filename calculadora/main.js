// const app = require('electron').app
// const BrowserWindow = require('electron').BrowserWindow --Obligatoria 
const{app,BrowserWindow} =require('electron') //esta linea es equivalente a los dos de arriba
//Ruta donde se encuentra nuestro proyecto
const path = require('path')
//Ruta pero en formato URL
const url  = require('url')
//Pantalla Principal
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	//es un objeto de browserWindow
	PantallaPrincipal = new BrowserWindow({
		width:320,
		height:425
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file', //le estamos diciendo que es un archivo de nosotros y respete las diagonales (?)
		slashes: true
	}))
	PantallaPrincipal.show()

}

//La aplicación se ejecuta
//el archivo main.js se carga en memoria. 
app.on('ready',muestraPantallaPrincipal) 