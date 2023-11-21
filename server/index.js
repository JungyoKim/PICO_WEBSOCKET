import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { handler } from '../build/handler.js';

const port = 3000;
const app = express();
const server = createServer(app);

const io = new Server(server);

io.on('connection', socket => {
  console.log('New client connected');

  socket.on('ultrasonicData', data => {
    io.emit('ultrasonicData', data);
  });

  socket.on('playSwitchData', data => {
    io.emit('playSwitchData', data);
  });

  socket.on('camSwitchData', data => {
    io.emit('camSwitchData', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use(handler);

server.listen(port);
