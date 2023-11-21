import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { Server } from 'socket.io';

const webSocketServer = {
  name: 'webSocketServer',
  configureServer(server) {
    if (!server.httpServer) return;

    const io = new Server(server.httpServer);

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

      // socket.on('base64Data', data => {
      //   io.emit('base64Data', data);
      // });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  },
};

export default defineConfig({
  plugins: [sveltekit(), webSocketServer],
});
