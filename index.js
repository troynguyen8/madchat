var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  socket.on('MESSAGE', (msg) => {
    io.emit('MESSAGE', msg);
  });
});

http.listen(883, () => {
  console.log('listening on *:883');
});
