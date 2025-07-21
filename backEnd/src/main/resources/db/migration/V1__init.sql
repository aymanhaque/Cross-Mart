CREATE TABLE IF NOT EXISTS users (
        id SERIAL NOT NULL,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        CONSTRAINT pk_user PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS postcards (
    id SERIAL NOT NULL,
    userName VARCHAR(255) NOT NULL,
    userInitials VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    requestingFromCountry VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    imageURL VARCHAR(255) NOT NULL,
    commentCount INT NOT NULL DEFAULT 0
)