const express = require('express');
const path = require('path')


const app = express();
const PORT = 3000;

// app.use(express.icons('./'));

app.get('/', (req, res) => {
    // res.send('hello')
    res.sendFile(path.resolve('dist' + '/index.html'))
});

app.get('/login/login.html', (req, res) => {
    res.sendFile(path.resolve('dist' + '/login/login.html'))
});

app.get('/signin/signin.html', (req, res) => {
    res.sendFile(path.resolve('dist' + '/signin/signin.html'))
});

app.get('/profile/profile.html', (req, res) => {
    res.sendFile(path.resolve('dist' + '/profile/profile.html'))
});

app.get('/chats/chats.html', (req, res) => {
    res.sendFile(path.resolve('dist' + '/chats/chats.html'))
});

app.get('/404/404.html', (req, res) => {
    res.sendFile(path.resolve('dist' + '/404/404.html'))
});

app.get('/505/505.html', (req, res) => {
    res.sendFile(path.resolve('dist' + '/505/505.html'))
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
