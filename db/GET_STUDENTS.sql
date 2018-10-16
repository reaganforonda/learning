SELECT *
FROM students
WHERE user_id = $1
AND ($2 IS NULL OR students.class_id = $2)
AND ($3 IS NULL OR students.student_id = $3)