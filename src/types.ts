export type TUser = {
  id: string;
  email: string;
  password: number;
};

export type TProduct = {
  id: number;
  name: string;
  price: number;
  category: SHOP;
};

export type TPurchase = {
  userId: string;
  productId: number;
  quantity: number;
  totalPrice: number;
};

export enum SHOP {
  CLOTHES = "Clouthes",
  ACCESSORIES = "Acessórios",
  SHOES = "Shoes",
}
