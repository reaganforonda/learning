const axios = require('axios');
const bcrypt = require('bcryptjs');

module.exports = {
    register : async (req, res) => {
        const db = req.app.get('db');
        const {email, pw, confirmPW, firstName, lastName} = req.body;

        if(pw !== confirmPW) {
            res.sendStatus(400);
        };
        
        db.CHECK_EMAIL([email.toLowerCase()]).then((users) => {
            if(users.length !== 0) {
                if(users[0].email === email) {
                    res.status(400).send('Please Login');
                }
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(confirmPW, salt);

                db.CREATE_USER([email.toLowerCase(), hash, firstName.toLowerCase(), lastName.toLowerCase()]).then((result) => {
                    res.sendStatus(200);
                }).catch((err) => {
                    console.log(`Server error while attempting to create a new user: ${err}`);
                });
            }
        })
    },

    login: (req, res) => {
        const db = req.app.get('db');
    },

    validate: (req, res) => {

    },

    logout: (req, res) => {

    }
}