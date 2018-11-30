var socket =  io();

socket.on('connect', function ()  {
    console.log('Connected to the server');
    socket.on('newMsg', function(msg) {
        console.log(msg.from,msg.text);
    });
    
 
});

socket.on('disconnect', function () {
console.log('disconnected from server');
});

// socket.on('newUser', function(user) {
//     console.log(user.text);
// });

