const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage} =  require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
        console.log('new user connected');

      socket.emit('newMsg', generateMessage('Admin', 'Welcome to chat App'));

      socket.broadcast.emit('newMsg', generateMessage('Admin','New user joined'));


        socket.on('createMessage', (msg, callback) => {
            console.log(msg);
            io.emit('newMsg', generateMessage(msg.from, msg.text));
            callback('This is from the server');
            // socket.broadcast.emit('newMsg', {
            //     from: msg.from,
            //     text: msg.text,
            //     createdAt: new Date().getTime()
            // });
        });

       socket.on('disconnect', () => {
            console.log('client disconnected');
          
         });
});

 


app.use(express.static(publicPath));

server.listen(port, ()=> {
    console.log(`Server is up on port: ${port}`);
});


