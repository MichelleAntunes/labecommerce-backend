-- Active: 1680532009349@@127.0.0.1@3306

CREATE TABLE users ( id TEXT PRIMARY KEY UNIQUE NOT NULL,
 email TEXT UNIQUE NOT NULL,   
 password TEXT NOT NULL
 );

 SELECT * FROM users;

 INSERT INTO users(id, email, password)
VALUES ("001", "usuario_numero1@email.com", "01C02");

INSERT INTO users(id, email, password)
VALUES ("002", "usuario_numero2@email.com", "0jk00");

INSERT INTO users(id, email, password)
VALUES ("003", "usuario_numero3@email.com", "asd142");