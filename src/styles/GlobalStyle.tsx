import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0px;
    font-family: 'Roboto', 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;