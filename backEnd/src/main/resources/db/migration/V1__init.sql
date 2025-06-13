CREATE TABLE IF NOT EXISTS users (
        id SERIAL NOT NULL,
        name VARCHAR(255) NULL,
        email VARCHAR(255) NULL,
        password VARCHAR(255) NULL,
        CONSTRAINT pk_user PRIMARY KEY (id)
);