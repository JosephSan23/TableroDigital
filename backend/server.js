const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
    }
});
io.on('connection', (socket) => {
    console.log('¡Alguien se conecto al tablero! ID:', socket.id);

    socket.on('disconnect', () => {
        console.log('Alguien se fue del tablero');
    });
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});