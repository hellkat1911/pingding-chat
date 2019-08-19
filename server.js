const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const dotenv = require('dotenv');

dotenv.config({ path: './settings.env' });

const HOST = process.env.CHAT_HOST;
const PORT = process.env.CHAT_PORT;

io.on('connection', socket => {
  
  console.log('A user connected...');

  socket.on('add user', username => {
    socket.username = username;

  });

  socket.on('chat message', ({id, msg}) => {
    io.emit('new message', {
      id,
      username: socket.username,
      message: msg
    });
  });

  socket.on('disconnect', () => {
    console.log(`${socket.username} has disconnected.`);
  });
});

http.listen(PORT, function() {
  console.log(`Listening on ${HOST}:${PORT}`);
});