import { GlobalStyle } from './styles/GlobalStyle';
import Router from './page/Menu.component';
import { CartProvider } from './context/Car';

function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <Router />
    </CartProvider>
  );
}

export default App;
