import { createContext, useState } from 'react';
import { CartContextData } from './interface/CartContextData';
import ProviderInterface from './interface/Provider';
import { Cart } from '../page/cart/interface/Cart';
import { Product } from '../page/product/interface/Product';

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: ProviderInterface) => {

    const [cart, setCart] = useState<Cart[]>([]);

    const addProduct = (product: Product, size?: string) => {
        let cartAux: Cart[] = existProduct(product, size);
        setCart(cartAux);
    }

    const existProduct = (product: Product, size?: string) => {
        let contens: boolean = false;
        const newCart: Cart[] = [...cart].map(cart => {
            let exist: boolean = cart.product.name === product.name && cart.product.actual_price === product.actual_price
            if (exist && (cart.size === size || !size)) {
                cart.quantity++;
                contens = true;
            }
            return cart;
        });
        if (!contens) {
            newCart.push({ product, quantity: 1, size })
        }
        return newCart
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, addProduct }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartContext;