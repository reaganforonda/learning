const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const massive = require("massive");
const dotenv = require("dotenv");
dotenv.config();
const authController = require('./controllers/authController');

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
}).catch(e => console.log(`Error: ${e}`));


// End Points
app.get('/api/auth/me', authController.validate)
app.post('/api/auth/login', authController.login);
app.get('/api/auth/logout', authController.logout);
app.post('/api/auth/register', authController.register);

app.listen(SERVER_PORT, () => {
    console.log(`Creeping on Port: ${SERVER_PORT}`);
});
