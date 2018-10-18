module.exports = {
    addAttendance: (req, res)=> {
        const db = req.app.get('db');
        const {user_id, class_id, student_id} = req.body;

        

    },

    getAttendance: (req, res)=> {
        const db = req.app.get('db');
        const {user_id, class_id, student_id} = req.query;

        db.GET_ATTENDANCE([user_id, class_id, student_id]).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            console.log(`Server error while attempting to retrieve attendance: ${err}`);
            res.sendStatus(500);
        })
    },

}