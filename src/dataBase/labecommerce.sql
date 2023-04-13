-- Active: 1680705031737@@127.0.0.1@3306

CREATE TABLE users (     
id TEXT PRIMARY KEY UNIQUE NOT NULL,
name TEXT UNIQUE NOT NULL,
 email TEXT UNIQUE NOT NULL,   
 password TEXT NOT NULL,
 created_at TEXT DEFAULT (DATETIME()) NOT NULL
 );
SELECT * FROM users;
 DROP TABLE users;
--Get All Users
 SELECT * FROM users
 ORDER BY email ASC;

 INSERT INTO users(id,name, email, password)
VALUES ("001", "michelle","usuario_numero1@email.com", "01C02"),
("002","bruno", "usuario_numero2@email.com", "0jk00"),
("003","camil", "usuario_numero3@email.com", "asd142");

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


-- Criação da tabela de pedidos
CREATE TABLE purchases (
  id TEXT PRIMARY KEY UNIQUE NOT NULL ,
  total_price REAL NOT NULL,
  paid INTEGER NOT NULL DEFAULT 0, -- A coluna paid será utilizada para guardar uma lógica booleana. O SQLite recomenda o uso do número 0 para false e 1 para true. Os pedidos começam com paid valendo 0.
  delivered_at TEXT DEFAULT (DATETIME()) NOT NULL, -- A coluna delivered_at será utilizada para gerenciar a data de entrega do pedido. Ela é opcional, porque sempre começará sem valor ao criar um pedido, ou seja, null.
  buyer_id TEXT NOT NULL,
  created_at TEXT DEFAULT (DATETIME()) NOT NULL,
  FOREIGN KEY (buyer_id) REFERENCES users (id)  
);
SELECT * FROM purchases;
DROP TABLE purchases;

INSERT INTO purchases (id, total_price,buyer_id)
VALUES ("P01", 299,  "003" ),
("P02", 50,  "001"),
("P03", 50,  "u001"),
("P04", 149, "u0020"),
("P05", 15, "Bananinha");

SELECT * FROM purchases
WHERE buyer_id = "004";
SELECT * FROM purchases;
SELECT * FROM purchases
INNER JOIN users
ON buyer_id = users.id
WHERE users.id = "003";
SELECT * FROM users
INNER JOIN purchases 
ON purchases.buyer_id = users.id;

UPDATE purchases
SET delivered_at = DATETIME('now')
WHERE id = "P01";

UPDATE purchases
SET delivered_at = DATETIME('now')
WHERE id = "P02";

CREATE TABLE products ( 
id TEXT PRIMARY KEY UNIQUE NOT NULL,
 name TEXT  NOT NULL,   
 price REAL NOT NULL,
 description TEXT NOT NULL,
 category TEXT NOT NULL,
 imageUrl TEXT NOT NULL
 );

DROP TABLE products;
SELECT * FROM products;
--Get All Products VERSÃO 1
 SELECT * FROM products
 ORDER BY price ASC
 LIMIT 20
 OFFSET 1;

 --Get All Products VERSÃO 2
 SELECT * FROM products
 WHERE price > 90 AND price < 200 
 ORDER BY price ASC;

 INSERT INTO products(id, name, price, description, category,imageUrl)
VALUES ("001", "Calça-Jeans Skinny", 199.90,"uma descricão", "Clouthes", "uma img"),
("002", "Calça-Jeans Pantalona", 99.90,"uma descricão", "Clouthes", "uma img"),
("003", "Calça-Jeans Plus Size", 199.90,"uma descricão", "Clouthes", "uma img"),
  ("004", "Adidas All-Star", 599.90,"uma descricão", "Shoes", "uma img"),
 ("005", "Vans Tradicional", 399.90, "uma descricão" , "Shoes", "uma img"),
 ("006", "Havaianas Branca", 29.90, "uma descricão","Shoes", "uma img"),
 ("007", "Brinco Strass", 299.90,"uma descricão", "Acessórios", "uma img"),
 ("008", "Shooker", 199.90,"uma descricão", "Acessórios", "uma img"),
 ("009", "Conjunto Pulseiras", 59.90, "uma descricão","Acessórios", "uma img");

--Search Product by name
SELECT * FROM products
WHERE name = "Vans Tradicional";

--Get Products by id
SELECT * FROM products
WHERE id = "004";
SELECT * FROM products;

-- Delete Product by id
DELETE  FROM products
WHERE id = "001";

-- Edit Product by id
UPDATE products
SET id = "Bananinha"
WHERE id = "002";

CREATE TABLE purchases_products (
  purchase_id  TEXT NOT NULL,
  product_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (purchase_id) REFERENCES purchases (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);


DROP TABLE purchases_products;

INSERT INTO purchases_products (purchase_id, product_id, quantity )
VALUES 
("P01", "003", "1"),
("P02", "003", "3"),
("P03", "004", "4"),
("P04", "003", "6"),
("P05", "007", "2"),
("P05", "009", "5");

SELECT * FROM purchases_products;

SELECT * FROM purchases_products
INNER JOIN products ON purchases_products.product_id = products.id
INNER JOIN purchases ON purchases_products.purchase_id = purchases.id;
