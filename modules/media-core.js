const fs   = require('fs');

//Ruta para los archivos.
const dir  = './files/';

//Función para listar los archivos del directorio audio.
module.exports.listFiles = (req,res)=>{

	let files = [];

	//Cargo en el array la lista de archivos.
	fs.readdirSync(dir).forEach(file =>files.push(file));

	res.json(files);
};

//Traigo el contenido del archivo.
module.exports.audioMedia = (req,res)=>{
	
	//Obtengo el nombre del archivo.
	let file = req.params.file;

	//Si el nombre no es nulo.
	if (file!='')
	{
		//Agrego el path local al file.
		file = dir+file;

		//Variable para el filesize.
		let statFile;

		//Intengo obtener el archivo.
		try
		{
			//Traigo atributos del archivo.
			statFile = fs.statSync(file);

			//Armo headers.
			res.writeHead(200, {'Content-Type': 'audio/mpeg','Content-Length': statFile.size});

			console.log('Conexión archivo: '+file);

			//Devuelvo streams del archivo atravez de un pipe.
			fs.createReadStream(file).pipe(res);
		}
		catch(error)
		{
			res.json({error:"No se encuentra el archivo."});
		}
	}
	else
		res.json({error:"Falta especificar el archivo."});
};

//Ruta incorrecta.
module.exports.routeError = (req,res)=>{
	res.json({error:"Servicio inexistente."});
};