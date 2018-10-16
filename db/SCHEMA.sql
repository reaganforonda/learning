DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(45),
    pw TEXT,
    first_name VARCHAR(45),
    last_name VARCHAR(45)
);

CREATE TABLE classes (
    class_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    class_name VARCHAR(45),
    school_year VARCHAR(45),
    class_code VARCHAR(45),
    school_name VARCHAR(45),
    class_start_date DATE,
    class_end_date DATE
);

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    class_id INTEGER REFERENCES classes(class_id),
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    parent_first_name  VARCHAR(45),
    parent_last_name VARCHAR(45),
    home_phone VARCHAR(45),
    parent_work_phone VARCHAR(45),
    parent_email VARCHAR(45)
)