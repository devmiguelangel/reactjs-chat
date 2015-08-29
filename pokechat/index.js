/*
* Dependencies
*/

import express from 'express';
import http from 'http';
import io from 'socket.io';

const port = 3000;
let app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

/*let server = app.listen(port, => {
	let host = server.address().address;
	let port = server.port().port;

	console.log(`Pokechat listening att escuchando por el puerto ${port}`);
});*/

let server = http.createServer(app).listen(port, () => {
	let host = server.address().address;
	let port = server.address().port;

	console.log(`Pokechat listening at port ${port}`);
});