import { Cart } from '../../page/cart/interface/Cart';
import { Product } from '../../page/product/interface/Product';

export interface CartContextData {
    cart: Cart[];
    addProduct(product: Product, size?: string): void;
}
