/*
* Dependencies
*/

import express from 'express';
import http from 'http';
import engine from 'socket.io';
import dbapi from './db-api';

const port = 3000;
let app = express();

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/pokemons', (req, res) => {
  dbapi.pokemons.find((pokemons) => {
    res.json(pokemons);
  });
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

const io = engine.listen(server);

io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    console.log(msg);
    io.emit('message', msg);
  });
});