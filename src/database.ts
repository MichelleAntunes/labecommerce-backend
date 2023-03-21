import { TUser, TProduct, TPurchase } from "./types";

export const users: TUser[] = [
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
  {
    id: "Camila",
    email: "camila@camila.com",
    password: 584714,
  },
  {
    id: "Artur",
    email: "artur@artur.com",
    password: 85968,
  },
  {
    id: "Hanna",
    email: "hanna@hanna.com",
    password: 123456,
  },
  {
    id: "Nathalia",
    email: "nathalia@nathalia.com",
    password: 654123,
  },
];

export const products: TProduct[] = [
  {
    id: "Arroz",
    name: "michelle@michelle.com",
    price: 20,
    category: "comida",
  },
  {
    id: "Arroz",
    name: "michelle@michelle.com",
    price: 20,
    category: "comida",
  },
  {
    id: "Arroz",
    name: "michelle@michelle.com",
    price: 20,
    category: "comida",
  },
  {
    id: "Arroz",
    name: "michelle@michelle.com",
    price: 20,
    category: "comida",
  },
  {
    id: "Arroz",
    name: "michelle@michelle.com",
    price: 20,
    category: "comida",
  },
  {
    id: "Arroz",
    name: "michelle@michelle.com",
    price: 20,
    category: "comida",
  },
];
export const purchase: TPurchase[] = [
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
