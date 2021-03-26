const express = require('express');
const path = require('path')


const app = express();
const PORT = 3000;

// app.use(express.icons('./'));



app.get('/', (req, res) => {
    pathIndex = path.resolve("dist", "index.html")
    res.sendFile(pathIndex)
});

app.get('/login/login.html', (req, res) => {
    pathLogin = path.resolve("dist/login", "login.html")
    res.sendFile(pathLogin)
});

app.get('/signin/signin.html', (req, res) => {
    pathSignin = path.resolve("dist/signin", "signin.html")
    res.sendFile(pathSignin)
});

app.get('/profile/profile.html', (req, res) => {
    pathProfile = path.resolve("dist/profile", "profile.html")
    res.sendFile(pathProfile)
});

app.get('/chats/chats.html', (req, res) => {
    pathChats = path.resolve("dist/chats", "chats.html")
    res.sendFile(pathChats)
});

app.get('/404/404.html', (req, res) => {
    path404 = path.resolve("dist/404", "404.html")
    res.sendFile(path404)
});

app.get('/505/505.html', (req, res) => {
    path505 = path.resolve("dist/505", "505.html")
    res.sendFile(path505)
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
