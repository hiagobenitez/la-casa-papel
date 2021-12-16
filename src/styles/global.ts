import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   
      outline: 0;
    text-decoration: none;
    list-style: none;
  }
  html, body {
    overflow-x: hidden;
    
    background: #0C0C10;
  
    @media screen and (min-width:1181px){
    overflow: hidden;

    }

  }
  ::-webkit-scrollbar {
  background: #0C0C10;
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background: #292929;
  border-radius: 2px;
}
  
  `;

export default GlobalStyles;
