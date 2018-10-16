const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const massive = require("massive");
const dotenv = require("dotenv");
const session = require('express-session');
const sessionMiddleware = require('./middlewares/sessionMiddleware');
dotenv.config();
const authController = require('./controllers/authController');
const classController = require('./controllers/classController');
const studentController= require('./controllers/studentController');
const courseWorkController = require('./controllers/courseWorkController');

const {SERVER_PORT, CONNECTION_STRING, SECRET_SESSION} = process.env

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(`${__dirname}/../build`));


massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
}).catch(e => console.log(`Error: ${e}`));


app.use(
    session({
        secret: SECRET_SESSION,
        resave: false,
        saveUninitialized: true
    })
);

app.use(sessionMiddleware.checkSession);

// End Points
app.get('/api/auth/me', authController.validate)
app.post('/api/auth/login', authController.login);
app.post('/api/auth/logout', authController.logout);
app.post('/api/auth/register', authController.register);

// Class Endpoint
app.get('/api/classes', classController.getClasses)
app.post('/api/classes', classController.createClass);

// Student Endpoints
app.post('/api/students', studentController.createStudent);
app.get(`/api/students/:user_id`, studentController.getStudents);

// Coursework Endpoints
app.post('/api/coursework', courseWorkController.createAssignment);
app.get('/api/coursework/:user_id', courseWorkController.getAssignment)

app.listen(SERVER_PORT, () => {
    console.log(`Creeping on Port: ${SERVER_PORT}`);
});
