export type TUser = {
  id: string;
  email: string;
  password: number;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
  category: SHOP;
};

export type TPurchase = {
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
};

export enum SHOP {
  CLOTHES = "Clouthes",
  ACCESSORIES = "Acessórios",
  SHOES = "Shoes",
}
