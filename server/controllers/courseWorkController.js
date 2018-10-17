module.exports = {
    createAssignment: (req, res) => {
        const db = req.app.get('db');
        const {class_id, course_work_name, course_work_description, due_date, total_points, weight, category} = req.body

        db.CREATE_COURSEWORK([class_id, course_work_name, course_work_description, due_date, total_points, weight, category]).then(()=> {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(`Server error while attempting to create coursework: ${err}`);
            res.sendStatus(500);
        })
    },

    getAssignment: (req, res) => {
        const db = req.app.get('db');
    },
}