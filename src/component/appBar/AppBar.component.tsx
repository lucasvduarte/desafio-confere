import { Text } from '../text/Text';
import { LinkRouter } from '../link/Link';
import { CartSize, Appbar, CartTitle } from './AppBar';
import { useContext } from 'react';
import CartContext from '../../context/Car';

function AppBar() {

    const { cart } = useContext(CartContext);

    return (
        <Appbar>
            <LinkRouter to='catalogo'>
                <Text fontSize={24} color='#fff' >
                    Catalogo
                </Text>
            </LinkRouter>

            <LinkRouter to='carrinho'>
                <CartTitle>
                    {cart.length ? <CartSize>{cart.length}</CartSize> : <></>}
                    <Text fontSize={24} color='#fff'  >
                        Carrinho
                    </Text>
                </CartTitle>
            </LinkRouter>
        </Appbar>
    );
}

export default AppBar;
