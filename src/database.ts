import { TUser, TProduct, TPurchase, SHOP } from "./types";

export let users: TUser[] = [
  {
    id: "Michelle",
    email: "michelle@michelle.com",
    password: 205187,
  },
  {
    id: "Bruno",
    email: "bruno@bruno.com",
    password: 541236,
  },
];

export let products: TProduct[] = [
  {
    id: 10,
    name: "Calça-Jeans",
    price: 50,
    category: SHOP.CLOTHES,
  },
  {
    id: 5,
    name: "Scarpin",
    price: 150,
    category: SHOP.SHOES,
  },
];
export let purchase: TPurchase[] = [
  {
    userId: users[0].id,
    productId: products[0].id,
    quantity: 2,
    totalPrice: products[0].price * 2,
  },
  {
    userId: users[1].id,
    productId: products[1].id,
    quantity: 1,
    totalPrice: 20,
  },
];
//Users*************
export function createUser(
  id: string,
  email: string,
  password: number
): TUser[] {
  const newUser = {
    id,
    email,
    password,
  };
  // return users.push(newUser)
  return (users = [...users, newUser]);
}

export function getAllUsers() {
  return console.log(users);
}

getAllUsers();

// Product************

export function createProduct(
  id: number,
  name: string,
  price: number,
  category: SHOP
): TProduct[] {
  const newProduct = {
    id,
    name,
    price,
    category,
  };

  return (products = [...products, newProduct]);
}

export function getAllProducts() {
  return console.log(products);
}

getAllProducts();

export function getProductById(idToSearce: number) {
  products.map((products) => {
    if (products.id === idToSearce) {
      return console.log(products);
    } else {
      return console.log(undefined);
    }
  });
}

export function queryProductsByName(q: string) {
  products.map((products) => {
    if (products.name.toLowerCase().includes(q.toLowerCase())) {
      return console.log(products);
    } else {
      return console.log(undefined);
    }
  });
}

//Purchase******

export function createPurchase(
  userId: string,
  productId: number,
  quantity: number,
  totalPrice: number
): TPurchase[] {
  const newPurchase = { userId, productId, quantity, totalPrice };

  return (purchase = [...purchase, newPurchase]);
}
export function getAllPurchasesFromUserId(userIdToSearch: string) {
  purchase.map((purchase) => {
    if (purchase.userId === userIdToSearch) {
      return console.log(purchase);
    } else {
      return console.log(undefined);
    }
  });
}
