const express = require('express');
const app = express();


app.listen(3000, function() {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
    })
})