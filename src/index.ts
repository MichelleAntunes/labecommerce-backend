import express, { Request, Response } from "express";
import cors from "cors";
import {
  users,
  products,
  purchase,
  createUser,
  getProductById,
  getAllUsers,
  getAllProducts,
  queryProductsByName,
  createPurchase,
  getAllPurchasesFromUserId,
} from "./database";
import { TProduct, TPurchase, TUser } from "./types";
import { SHOP } from "./types";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3004, () => {
  console.log("Servidor rodando na porta 3004");
});
// Teste API
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

// getAllUsers
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

// getAllProducts

app.get("/products", (req: Request, res: Response) => {
  res.status(200).send(products);
});

//SearchProductByName

app.get("/products/search", (req: Request, res: Response) => {
  const q = req.query.q as string;
  const result = products.filter((product) => {
    return product.name.toLowerCase().includes(q.toString().toLowerCase());
  });
  res.status(200).send(result);
});

// CreateUser

app.post("/users", (req: Request, res: Response) => {
  const id = req.body.id;
  const email = req.body.email;
  const password = req.body.password;

  const newUsers: TUser = {
    id,
    email,
    password,
  };
  users.push(newUsers);
  res.status(201).send("Usuário cadastrado com sucesso");
});

// CreateProduct

app.post("/products", (req: Request, res: Response) => {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;

  const newProduct: TProduct = {
    id,
    name,
    price,
    category,
  };
  products.push(newProduct);
  res.status(201).send("Produto cadastrado com sucesso");
});

//createPurchase
app.post("/purchases", (req: Request, res: Response) => {
  const userId = req.body.userId;
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  const totalPrice = req.body.totalPrice;

  const newPurchase: TPurchase = {
    userId,
    productId,
    quantity,
    totalPrice,
  };
  purchase.push(newPurchase);
  res.status(201).send("Compra realizada com sucesso");
});

//getAllPurchases

app.get("/purchases", (req: Request, res: Response) => {
  res.status(200).send(purchase);
});

//getProductByID
app.get("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = products.find((product) => {
    return product.id === id;
  });
  if (result) {
    res.status(200).send(result);
  } else {
    res.send("Produto não encontrado");
  }
});

//getUserPurchasesById

app.get("/users/:id/purchases", (req: Request, res: Response) => {
  const userId = req.params.id;
  const result = purchase.find((user) => {
    return user.userId === userId;
  });
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(400).send("Usuário não encontrado");
  }
});

//deleteUserById

app.delete("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = users.findIndex((user) => {
    return user.id === id;
  });
  if (result >= 0) {
    users.splice(result, 1);
  }
  res.status(200).send("User apagado com sucesso");
});

//deleteProductById
app.delete("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const result = products.findIndex((product) => {
    return product.id === id;
  });
  if (result >= 0) {
    products.splice(result, 1);
  }
  res.status(200).send("Produto apagado com sucesso");
});

//editUserById
app.put("/users/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newEmail = req.body.email as string | undefined;
  const newPassword = req.body.password as number | undefined;

  const userToEdit = users.find((user) => {
    return user.id === id;
  });
  if (userToEdit) {
    userToEdit.email = newEmail || userToEdit.email;
    userToEdit.password = newPassword || userToEdit.password;
  }
  res.status(200).send("Atulização realizada com sucesso");
});

//editProductById
app.put("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  const newName = req.body.name as string | undefined;
  const newPrice = req.body.price as number | undefined;
  const newCategory = req.body.category as SHOP | undefined;

  const productToEdit = products.find((product) => {
    return product.id === id;
  });
  if (productToEdit) {
    productToEdit.name = newName || productToEdit.name;
    productToEdit.price = newPrice || productToEdit.price;
    productToEdit.category = newCategory || productToEdit.category;
  }
  res.status(200).send("Produto atualizado com sucesso");
});

//***************************************************** */
// console.log("Usuários");
// console.log(users);
// console.log("Produtos");
// console.log(products);
// console.log("Purchase");
// console.log(purchase);
// createUser("u003", "beltrano@email.com", 12345);
// createUser("uiuiu", "uiuu@email.com", 12345);
// createUser("novouser", "ciclano@email.com", 99)
// console.log("users");
// getAllUsers();
// console.log("products");
// getAllProducts();
// getProductById(10);
// queryProductsByName("scarpin");
// createPurchase("mizinha", 10, 2, 100);
// getAllPurchasesFromUserId("mizinha");
