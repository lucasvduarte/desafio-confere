import { Product } from "../../product/interface/Product";

export interface Cart {
    product: Product;
    quantity: number;
    size?: string;
}