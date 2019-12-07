const express = require('express');
const bodyParser = require('body-parser');
let controller = require('./controladores/tokenController');

let app = express();
const port = 8000;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes & Handlers
app.post('/login', controller.login);
// app.get('/', middleware.checkToken, handlers.index);
app.listen(port, () => console.log(`Server is listening on port: ${port}`));