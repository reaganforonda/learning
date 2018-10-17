SELECT *
FROM attendance
WHERE user_id = $1
AND ($2 IS NULL OR attendance.class_id = $2)
AND ($3 IS NULL OR attendance.student_id = $3)