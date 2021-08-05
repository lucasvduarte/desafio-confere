import { Route, Switch } from "react-router-dom";
import Product from './product/Product.component';
import Cart from './cart/Cart.component';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Product />} />
      <Route path="/catalogo" component={() => <Product />} />
      <Route path="/carrinho" component={() => <Cart />} />
      <Route component={() => <>NotFoundRedirect</>} />
    </Switch>
  );
};

export default Routes;
