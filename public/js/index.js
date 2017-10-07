var socket = io();

        socket.on('connect', function() {
            console.log('Connected to the server');


            socket.emit('createMessage', {
                from: 'Sheyar',
                text: 'This is a new message'   
            });
        });

    
        socket.on('newMessage', function(message) {
            console.log('The new message', message);
        });

        socket.on('disconnect', function() {
            console.log('Disconnected to the server');
        });