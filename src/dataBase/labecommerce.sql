-- Active: 1680532009349@@127.0.0.1@3306

CREATE TABLE users ( id TEXT PRIMARY KEY UNIQUE NOT NULL,
 email TEXT UNIQUE NOT NULL,   
 password TEXT NOT NULL
 );
--Get All Users
 SELECT * FROM users
 ORDER BY email ASC;

 INSERT INTO users(id, email, password)
VALUES ("001", "usuario_numero1@email.com", "01C02"),
("002", "usuario_numero2@email.com", "0jk00"),
("003", "usuario_numero3@email.com", "asd142");

INSERT INTO users (id, email, password)
VALUES ("004", "usuario_numero4@email.com", "01478");

--Get User by id
SELECT * FROM users
WHERE id = "001";

-- Delete User by id
DELETE FROM users
WHERE id = "001";

-- Edit User by id
UPDATE users
SET id = "Bananinha"
WHERE id = "002";