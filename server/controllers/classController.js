module.exports = {
    createClass: (req, res) => {
        const db = req.app.get('db');

        
    },

    getClasses: (req, res) => {
        const db = req.app.get('db');

        const {userID} = req.query;
        
        db.GET_USER_CLASSES([userID]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retrive user classes: ${err}`);
            res.sendStatus(500);
        })
    },
}