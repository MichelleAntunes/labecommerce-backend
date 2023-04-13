import { TUser, TProduct, TPurchase, SHOP } from "./types";

export let users: TUser[] = [
  {
    id: "Michelle",
    name: "Michelle",
    email: "michelle@michelle.com",
    password: 205187,
  },
  {
    id: "Bruno",
    name: "Bruno",
    email: "bruno@bruno.com",
    password: 541236,
  },
];

export let products: TProduct[] = [
  {
    id: "c01",
    name: "Calça-Jeans",
    price: 50,
    description: "Calça masculina",
    category: SHOP.CLOTHES,
    imageUrl: "uma imagem",
  },
  {
    id: "c01",
    name: "Pullover",
    price: 50,
    description: "Pullover masculina",
    category: SHOP.CLOTHES,
    imageUrl: "uma imagem",
  },
];
export let purchase: TPurchase[] = [
  {
    // userId: users[0].id,
    // productId: products[0].id,
    // quantity: 2,
    // totalPrice: products[0].price * 2,
    id: "c001",
    buyer_id: users[0].id,
    total_price: 59,
  },
  {
    // userId: users[1].id,
    // productId: products[1].id,
    // quantity: 1,
    // totalPrice: 20,
    id: "c002",
    buyer_id: users[1].id,
    total_price: 100,
  },
];
//Users*************
export function createUser(
  id: string,
  name: string,
  email: string,
  password: number
): TUser[] {
  const newUser = {
    id,
    name,
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
  id: string,
  name: string,
  price: number,
  description: string,
  category: SHOP,
  imageUrl: string
): TProduct[] {
  const newProduct = {
    id,
    name,
    price,
    description,
    category,
    imageUrl,
  };

  return (products = [...products, newProduct]);
}

export function getAllProducts() {
  return console.log(products);
}

getAllProducts();

export function getProductById(idToSearce: string) {
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
  // userId: string,
  // productId: string,
  // quantity: number,
  // totalPrice: number
  id: string,
  buyer_id: string,
  total_price: number
): TPurchase[] {
  const newPurchase = { id, buyer_id, total_price };

  return (purchase = [...purchase, newPurchase]);
}
export function getAllPurchasesFromUserId(userIdToSearch: string) {
  purchase.map((purchase) => {
    if (purchase.buyer_id === userIdToSearch) {
      return console.log(purchase);
    } else {
      return console.log(undefined);
    }
  });
}
