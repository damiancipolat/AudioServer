//Incluyo modulos.
const http   	 = require('http');
const express 	 = require('express');

//Instancias.
const app 	 	 = express();
const server 	 = http.createServer(app);
const port 		 = 5000;

//Modulos
const core 	 	 = require('./modules/media-core.js');

//Traer lista de canciones.
app.get('/audioList/',core.listFiles);

//Hago streaming del archivo.
app.get('/audio/:file/',core.audioMedia);

//Ruta para la url equivocada.
app.get('*',core.routeError);

//Inicializo el servidor, escuchando conexiones en el puerto fijado en port.
app.listen(port,(err)=>
{
	//Si hay un error, muestro por la consola, sino msj de inicio.
	if (err)
		console.log('ERROR: hubo un problema al inciar el server.');
	else
	{
		console.log('');		
		console.log('Server | Audio Strem Server');		
		console.log('>Listen on port: '+port);
		console.log('');
	}
});