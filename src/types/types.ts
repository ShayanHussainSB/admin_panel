import { PublicKey } from "@solana/web3.js";
export interface Store {
  key: PublicKey;
}

export interface IMerch {
  name: string;
  imageFront: string;
  imageBack: string;
  price: number;
  description: string;
  size: string[];
  color: string[];
  stock: number;
}
export interface MerchJS extends IMerch {
  store: string;
  key: string;
}
export class Merch implements IMerch {
  store: PublicKey;
  key: PublicKey;
  name: string;
  imageFront: string;
  imageBack: string;
  price: number;
  description: string;
  size: string[];
  color: string[];
  stock: number;
  constructor(props: {
    store: PublicKey;
    key: PublicKey;
    name: string;
    imageFront: string;
    imageBack: string;
    price: number;
    description: string;
    size: string[];
    color: string[];
    stock: number;
  }) {
    this.store = props.store;
    this.key = props.key;
    this.name = props.name;
    this.imageFront = props.imageFront;
    this.imageBack = props.imageBack;
    this.price = props.price;
    this.description = props.description;
    this.size = props.size;
    this.color = props.color;
    this.stock = props.stock;
  }
  toJson(): MerchJS {
    return {
      store: this.store.toString(),
      key: this.key.toString(),
      name: this.name,
      imageFront: this.imageFront,
      imageBack: this.imageBack,
      price: this.price,
      description: this.description,
      size: this.size,
      color: this.color,
      stock: this.stock,
    };
  }
}
export interface CartItem {
  merch: MerchJS;
  quantity: number;
  size: string; //index
  color: string; //index
}
export interface StakerInfo {
  address: PublicKey | undefined;
  holdings: number;
  tokens: number;
}
export interface ITable {
  color1: string;
  color2: string;
  imageFront: File | null;
  imageBack: File | null;
}
