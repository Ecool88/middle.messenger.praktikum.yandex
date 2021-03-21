const express = require('express');
const path = require('path')


const app = express();
const PORT = 3000;

// app.use(express.static('./'));

app.get('/', (req, res) => {
    res.send('hello')
    // res.sendFile(path.resolve('dist' + '/chats/chats.html'))
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
