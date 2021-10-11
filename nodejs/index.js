const http=require('http');

//generamos nuestro servidor
const server = http.createServer((req, res) => {
    console.log('Recibida petición');
    console.log(req);
    res.end('Nuestro primer servidor');
});

//Lanzamos servidor de forma asincrona
server.listen(8000,'127.0.0.1',()=>{
    console.log('Servidor escuchando en puerto 8000');
});
