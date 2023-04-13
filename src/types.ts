export type TUser = {
  id: string;
  name: string;
  email: string;
  password: number;
};

export type TProduct = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: SHOP;
  imageUrl: string;
};

export type TPurchase = {
  id: string;
  // productId: string;
  // quantity: number;
  total_price: number;
  buyer_id: string;
};

export enum SHOP {
  CLOTHES = "Clouthes",
  ACCESSORIES = "Acessórios",
  SHOES = "Shoes",
}
