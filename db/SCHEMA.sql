DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(45),
    pw TEXT,
    first_name VARCHAR(45),
    last_name VARCHAR(45)
);