-- Active: 1680532009349@@127.0.0.1@3306
CREATE TABLE products ( id TEXT PRIMARY KEY UNIQUE NOT NULL,
 name TEXT  NOT NULL,   
 price REAL NOT NULL,
 category TEXT NOT NULL
 );

 SELECT * FROM products;

 INSERT INTO products(id, name, price, category)
VALUES ("001", "Calça-Jeans Skinny", 199.90, "Clouthes");

 INSERT INTO products(id, name, price, category)
VALUES ("002", "Calça-Jeans Pantalona", 99.90, "Clouthes");
 INSERT INTO products(id, name, price, category)
VALUES ("003", "Calça-Jeans Plus Size", 199.90, "Clouthes");

 INSERT INTO products(id, name, price, category)
VALUES ("004", "Adidas All-Star", 599.90, "Shoes");
 INSERT INTO products(id, name, price, category)
VALUES ("005", "Vans Tradicional", 399.90, "Shows");
 INSERT INTO products(id, name, price, category)
VALUES ("006", "Havaianas Branca", 29.90, "Shoes");
 INSERT INTO products(id, name, price, category)
VALUES ("007", "Brinco Strass", 299.90, "Acessórios");
 INSERT INTO products(id, name, price, category)
VALUES ("008", "Shooker", 199.90, "Acessórios");
 INSERT INTO products(id, name, price, category)
VALUES ("009", "Conjunto Pulseiras", 59.90, "Acessórios");