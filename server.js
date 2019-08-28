const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const HOST = process.env.CHAT_HOST;
const PORT = process.env.CHAT_PORT;

io.on('connection', socket => {

  console.log('"connection" event fired');
  
  socket.on('add user', username => {
    console.log(`"add user" event fired`);

    socket.username = username;
  });

  socket.on('chat message', ({id, msg}) => {
    console.log(`"chat message" event fired`);
    
    io.emit('new message', {
      id,
      user: socket.username,
      msg
    });
  });

  socket.on('disconnect', () => {
    console.log(`"disconnect" event fired`);
  });
});

http.listen(PORT, function() {
  console.log(`Listening on ${HOST}:${PORT}`);
});