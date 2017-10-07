const path = require('path'); // to customize our paths
const http = require('http'); // express uses https, but to add socket.io to the app we have configure it with http by ourselves
const express = require('express');
const socketIO = require('socket.io');//this library has frontend and backend

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; //for heroku to set the port or default one 3000
var app = express();
var server = http.createServer(app);// create http server
var io = socketIO(server); //here socket can access to the server and using io we can emit and listen to events


app.use(express.static(publicPath));

io.on('connection', (socket) => { // to rigester connection listener
    console.log('New user is connected');

    socket.emit('newMessage', {
        from: 'Sheyar',
        text: 'Hey, you got a new message',
        cearteAt: new Date()

    });

    socket.on('createMessage', (message) => {
        console.log('The created message', message);
    });


    socket.on('disconnect', () => {
        console.log('User is disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});