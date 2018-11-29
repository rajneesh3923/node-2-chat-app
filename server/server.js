const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
        console.log('new user connected');

      
        // socket.emit('newMsg', {
        //     text: "hello how are you",
        //     from: 'Ajay'
        // });

        socket.on('createMsg', (msg) => {
            console.log(msg);
            io.emit('newMsg', {
                from: msg.from,
                text: msg.text,
                createdAt: new Date().getTime()
            });
        })

       socket.on('disconnect', () => {
            console.log('client disconnected');
         });
});

 


app.use(express.static(publicPath));

server.listen(port, ()=> {
    console.log(`Server is up on port: ${port}`);
});


