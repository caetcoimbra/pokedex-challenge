import { createGlobalStyle } from 'styled-components';

import pikachuBackground from '../assets/pikachuBackground.png';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #d8d8dc url(${pikachuBackground})repeat-y 70% top;
    
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    margin-left: 300px;
  }
  button {
    cursor: pointer;
  }
`;
