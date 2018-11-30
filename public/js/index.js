var socket =  io();

socket.on('connect', function ()  {
    console.log('Connected to the server');
});

socket.on('disconnect', function () {
console.log('disconnected from server');
});

// socket.on('newUser', function(user) {
//     console.log(user.text);
// });

socket.on('newMsg', function(msg) {
    console.log(msg.from,msg.text);
    var li = $('<li></li>');
    li.text(`${msg.from}: ${msg.text}`);

    $('#messages').append(li);

});


// JQuery('#message-form').on('submit', function (e) {
//         e.preventDefault();
// });

$(document).ready(function(){
  $('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from:'User',
        text: $('[name=message]').val()
    }, function () {
        
    });
});


});