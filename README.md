# Audio Streaming
>El proyecto consiste en un servidor y api para hacer streaming de archivos de audio con NodeJS.

## Instalar
```sh
$ npm install
```

Servicios del servidor.

- AudioList: Obtener listado de archivos publicados.
Ej: http://127.0.0.1:5000/audioList

Respuesta:
["andrew_rayel_impulse.mp3","groove_armada_paris.mp3"]

- Audio: Devuelvo streamings del archivo.
Ej: http://127.0.0.1:5000/audio/andrew_rayel_impulse.mp3
