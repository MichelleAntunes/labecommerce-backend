-- Active: 1680532009349@@127.0.0.1@3306
CREATE TABLE products ( id TEXT PRIMARY KEY UNIQUE NOT NULL,
 name TEXT  NOT NULL,   
 price REAL NOT NULL,
 category TEXT NOT NULL
 );

--Get All Products VERSÃO 1
 SELECT * FROM products
 ORDER BY price ASC
 LIMIT 20
 OFFSET 1;

 --Get All Products VERSÃO 2
 SELECT * FROM products
 WHERE price > 90 AND price < 200 
 ORDER BY price ASC;

 INSERT INTO products(id, name, price, category)
VALUES ("001", "Calça-Jeans Skinny", 199.90, "Clouthes"),
("002", "Calça-Jeans Pantalona", 99.90, "Clouthes"),
("003", "Calça-Jeans Plus Size", 199.90, "Clouthes"),
  ("004", "Adidas All-Star", 599.90, "Shoes"),
 ("005", "Vans Tradicional", 399.90, "Shows"),
 ("006", "Havaianas Branca", 29.90, "Shoes"),
 ("007", "Brinco Strass", 299.90, "Acessórios"),
 ("008", "Shooker", 199.90, "Acessórios"),
 ("009", "Conjunto Pulseiras", 59.90, "Acessórios");

--Search Product by name
SELECT * FROM products
WHERE name = "Calça-Jeans Skinny";

--Get Products by id
SELECT * FROM products
WHERE id = "001";

-- Delete Product by id
DELETE  FROM products
WHERE id = "001";

-- Edit Product by id
UPDATE products
SET id = "Bananinha"
WHERE id = "002";