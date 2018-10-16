module.exports = {
    createStudent: (req, res) => {
        const db = req.app.get('db');
        const {user_id, class_id, first_name, last_name} = req.body;

        db.CREATE_STUDENT([user_id, class_id, first_name, last_name]).then(()=> {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`Server error while attempting to add new student: ${err}`);
            res.sendStatus(500);
        })
    },
}