var socket =  io();

socket.on('connect', function ()  {
    console.log('Connected to the server');
 
});

socket.on('disconnect', function () {
console.log('disconnected from server');
});

socket.on('newMsg', function(msg) {
    console.log('New Message:', msg);
});

