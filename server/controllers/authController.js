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
        const {email, pw, confirmPW} = req.body;

        db.CHECK_EMAIL([email.toLowerCase()]).then((user) => {
            
            if(user.length === 0) {
                res.sendStatus(401);
            }

            if(user.length !== 0) {
                const userID = user[0].user_id;
                const userPW = user[0].pw;

                const confirmedPW = bcrypt.compareSync(pw, userPW);
                
                if(confirmedPW) {
                    req.session.user.user_id = userID;
                    
                    let loggedUser = {
                        user_id : user[0].user_id,
                        first_name : user[0].first_name,
                        last_name: user[0].last_name,
                        email: user[0].email
                    }
                    res.status(200).send(loggedUser);
                }
            }
        }).catch((err) => {
            console.log(`Server error while attempting to authenticate user: ${err}`);
            res.sendStatus(500);
        })
    },

    validate: (req, res) => {

    },

    logout: (req, res) => {

    }
}