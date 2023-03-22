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

// console.log("Usuários");
// console.log(users);
// console.log("Produtos");
// console.log(products);
// console.log("Purchase");
// console.log(purchase);
// createUser("u003", "beltrano@email.com", 12345);
// createUser("uiuiu", "uiuu@email.com", 12345);
// createUser("novouser", "ciclano@email.com", 99)
console.log("users");
getAllUsers();
console.log("products");
getAllProducts();
getProductById(10);
queryProductsByName("scarpin");
createPurchase("mizinha", 10, 2, 100);
getAllPurchasesFromUserId("mizinha");
