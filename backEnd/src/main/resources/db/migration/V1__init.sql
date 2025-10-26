CREATE TABLE IF NOT EXISTS users (
                                     id SERIAL NOT NULL,
                                     name VARCHAR(255) NOT NULL,
                                     email VARCHAR(255) NOT NULL UNIQUE,
                                     password VARCHAR(60) NOT NULL,
                                     location VARCHAR(255),
                                     CONSTRAINT pk_user PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS postcards (
                                         id SERIAL NOT NULL,
                                         user_name VARCHAR(255) NOT NULL,
                                         user_initial VARCHAR(255) NOT NULL,
                                         location VARCHAR(255) NOT NULL,
                                         requesting_from_country VARCHAR(255) NOT NULL,
                                         text TEXT NOT NULL,
                                         image_url VARCHAR(255) NOT NULL,
                                         comment_count INT NOT NULL DEFAULT 0,
                                         user_id INTEGER NOT NULL,
                                         CONSTRAINT fk_postcards_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
