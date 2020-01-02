const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let controller = require('./controladores/tokenController');

let app = express();
let router = express.Router();
const port = 8000;
app.use(cors(),
    bodyParser.urlencoded({
        extended: false
    }),
    bodyParser.json()
);

// Routes & Handlers
app.post('/api/v1/login', controller.login);
app.get('/api/v1/verify', controller.checkToken, controller.index);
app.get('/api/v1/logout', controller.logout);
app.get('/api/v1/refreshLogin', controller.getSession);

app.listen(port, () => console.log(`Server is listening on port: ${port}`));