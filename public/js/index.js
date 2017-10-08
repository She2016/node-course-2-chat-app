var socket = io();

        socket.on('connect', function() {
            console.log('Connected to the server');


            socket.on('welcomeMessage', function(wlcmMessage) {// i fixed the message
                console.log(wlcmMessage);
            });
        });

        socket.on('joinMessage', function(joinMessage) {
            console.log(joinMessage);
        });
    
        socket.on('newMessage', function(message) {
            console.log('The new message', message);
        });

        socket.on('disconnect', function() {
            console.log('Disconnected to the server');
        });