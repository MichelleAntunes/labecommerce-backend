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
import { type } from "os";
import { db } from "./dataBase/knex";
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3004, () => {
  console.log("Servidor rodando na porta 3004");
});

// getAllUsers
app.get("/users", async (req: Request, res: Response) => {
  try {
    const result = await db.raw(`SELECT * FROM users`);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

// getAllProducts

app.get("/products", async (req: Request, res: Response) => {
  try {
    const result = await db.raw(`SELECT * FROM products`);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

//SearchProductByName

app.get("/products/search", (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;
    if (q.length < 1) {
      res.status(400);
      throw new Error("query params deve possuir pelo menos dois caracteres");
    }
    const result = products.filter((product) => {
      return product.name.toLowerCase().includes(q.toString().toLowerCase());
    });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

// CreateUser

app.post("/users", (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    if (id === "" || typeof id === undefined) {
      res.status(400);
      throw new Error("Id do usuário undefined ou vazio. Verifique!");
    } else if (typeof id !== "string") {
      res.status(400);
      throw new Error("Id do usuário deve ser string");
    }

    if (typeof email !== "string" || typeof email === undefined) {
      res.status(400);
      throw new Error("Email do usuário errado. Deve ser uma string");
    }
    if (typeof password !== "number" || typeof password === undefined) {
      res.status(400);
      throw new Error("Senha do usuário errado. Deve ser um número");
    }
    const resultId = users.find((user) => user.id === id);
    if (resultId) {
      res.status(404);
      res.send("ID de usuáro já cadastrado");
    }
    const resultEmail = users.find((user) => user.email === email);
    if (resultEmail) {
      res.status(404);
      res.send("Email de usuáro já cadastrado");
    }
    const newUsers: TUser = {
      id,
      email,
      password,
    };

    users.push(newUsers);
    res.status(201).send("Usuário cadastrado com sucesso");
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

// CreateProduct

app.post("/products", (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const category = req.body.category;
    if (typeof id !== "string" || typeof id === undefined) {
      res.status(400);
      throw new Error("Id do produto errado. Deve ser uma string");
    }
    if (typeof name !== "string" || typeof name === undefined) {
      res.status(400);
      throw new Error("Nome do produto errado. Deve ser uma string");
    }
    if (typeof price !== "number" || typeof price === undefined) {
      res.status(400);
      throw new Error("Preço do produto errado. Deve ser um number");
    }
    if (
      !Object.values(SHOP).includes(category) ||
      typeof category === undefined
    ) {
      res.status(400);
      throw new Error("Categoria do produto errado. Deve ser um string - SHOP");
    }

    if (products.find((product) => product.id === id)) {
      res.status(404);
      res.send("ID do produto já cadastrado. Tente novamente.");
    }
    const newProduct: TProduct = {
      id,
      name,
      price,
      category,
    };
    products.push(newProduct);
    res.status(201).send("Produto cadastrado com sucesso");
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//createPurchase
app.post("/purchases", (req: Request, res: Response) => {
  try {
    const userId = req.body.userId;
    const productId = req.body.productId;
    const quantity = req.body.quantity;
    const totalPrice = req.body.totalPrice;

    if (typeof userId !== "string") {
      res.status(400);
      throw new Error("User Id incorreto. Deve ser uma string.");
    }
    if (typeof productId !== "string") {
      res.status(400);
      throw new Error("Produto incorreto. Deve ser uma string");
    }
    if (typeof quantity !== "number") {
      res.status(400);
      throw new Error("Quantidade incorretoa. Deve ser um número");
    }
    if (typeof totalPrice !== "number") {
      res.status(400);
      throw new Error("Preço total incorretoa. Deve ser um número");
    }
    const newPurchase: TPurchase = {
      userId,
      productId,
      quantity,
      totalPrice,
    };
    purchase.push(newPurchase);
    res.status(201).send("Compra realizada com sucesso");
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//getAllPurchases

app.get("/purchases", (req: Request, res: Response) => {
  try {
    res.status(200).send(purchase);
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//getProductByID
app.get("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = products.find((product) => product.id === id);
    if (!result) {
      res.status(404);
      throw new Error("Produto por ID não encontrada, verifique o id");
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//getUserPurchasesById

app.get("/users/:id/purchases", (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const result = purchase.find((user) => user.userId === userId);
    if (!result) {
      res.status(404);
      throw new Error("Compra por ID não encontrada, verifique o id");
    }
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//deleteUserById

app.delete("/users/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = users.findIndex((user) => user.id === id);

    if (result >= 0) {
      users.splice(result, 1);
      res.status(200).send("User apagado com sucesso");
    } else {
      res.status(404);
      throw new Error(
        "Não foi possível deletar o usuário pelo ID. Verifique o ID."
      );
    }
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//deleteProductById
app.delete("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = products.findIndex((product) => product.id === id);

    if (result >= 0) {
      products.splice(result, 1);
      res.status(200).send("Produto apagado com sucesso");
    } else {
      res.status(404);
      throw new Error("Produto por ID não encontrado. Verifique o ID");
    }
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//editUserById
app.put("/users/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newEmail = req.body.email as string | undefined;
    const newPassword = req.body.password as number | undefined;
    if (newEmail !== undefined) {
      if (typeof newEmail !== "string") {
        res.status(400);
        throw new Error("Email inválido, deve ser do tipo string");
      }
    }
    if (newPassword !== undefined) {
      if (typeof newPassword !== "number") {
        res.status(400);
        throw new Error("Senha inválida, deve ser do tipo number");
      }
    }

    const userToEdit = users.find((user) => user.id === id);

    if (userToEdit) {
      userToEdit.email = newEmail || userToEdit.email;
      userToEdit.password = newPassword || userToEdit.password;
      res.status(200).send("Atulização realizada com sucesso");
    } else {
      res.status(404);
      res.send("Usuário por ID não encontrado. Verifique o ID.");
    }
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

//editProductById com erro
app.put("/products/:id", (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newName = req.body.name as string | undefined;
    const newPrice = req.body.price as number | undefined;
    const newCategory = req.body.category as SHOP | undefined;
    if (newName !== undefined) {
      if (typeof newName !== "string") {
        res.status(400);
        res.send("Nome do produto incorreto. Deve ser uma string");
      }
    }
    if (newPrice !== undefined) {
      if (typeof newName !== "number") {
        res.status(400);
        res.send("Preço do produto incorreto. Deve ser um number");
      }
    }
    if (newCategory !== undefined) {
      if (!Object.values(SHOP).includes(newCategory)) {
        res.status(400);
        res.send("Categoria do produto incorreto. Deve ser uma string-SHOP");
      }
    }

    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      productToEdit.name = newName || productToEdit.name;
      productToEdit.price = newPrice || productToEdit.price;
      productToEdit.category = newCategory || productToEdit.category;
      res.status(200).send("Produto atualizado com sucesso");
    } else {
      res.status(404);
      res.send("Produto por ID nao encontrado. Verifique o ID.");
    }
  } catch (error) {
    console.log(error);
    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
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
