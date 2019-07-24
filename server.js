const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  
  console.log('A user connected...');

  socket.on('chat message', msg => {
    // console.log(msg);
    io.emit('chat message', msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});