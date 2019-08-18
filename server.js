const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const dotenv = require('dotenv');

dotenv.config({ path: './settings.env' });

const HOST = process.env.CHAT_HOST;
const PORT = process.env.CHAT_PORT;

io.on('connection', socket => {
  
  console.log('A user connected...');

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
});

io.on('disconnect', socket => {
  console.log('User has disconnected.');
});

http.listen(PORT, function() {
  console.log(`Listening on ${HOST}:${PORT}`);
});