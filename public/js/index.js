var socket = io();

        socket.on('connect', function() {
            console.log('Connected to the server');


            socket.on('welcomeMessage', function(welcomeMessage) {
                console.log(welcomMessage);
            });
        });

        socket.on('joinMessage', function(jionMessage) {
            console.log(joinMessage);
        });
    
        socket.on('newMessage', function(message) {
            console.log('The new message', message);
        });

        socket.on('disconnect', function() {
            console.log('Disconnected to the server');
        });