const express = require('express');
const app = express();


app.listen(3000, function() {
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html')
        // Note: __dirname is the current directory you're in. Try logging it and see what you get!
        // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
    })
})