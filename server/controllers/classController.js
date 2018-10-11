module.exports = {
    createClass: (req, res) => {
        const db = req.app.get('db');
        const {className, classCode, schoolName, schoolYear, classStartDate, classEndDate} = req.body;
        const {userID} = req.query

        db.CREATE_CLASS([userID, className, schoolYear, classCode, schoolName, classStartDate, classEndDate]).then(() => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`Server error while attempting to add new class: ${err}`);
            res.sendStatus(500);
        })
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