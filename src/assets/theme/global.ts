import { createGlobalStyle } from "styled-components";

import AvenirMedium from "../styles/fonts/Avenir-Medium.ttf"
import AvenirBlack from "../styles/fonts/Avenir-Black.ttf"
import AvenirBook from "../styles/fonts/Avenir-Book.ttf"
import AvenirHeavy from "../styles/fonts/Avenir-Heavy.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'CustomAvenir';
    src: url(${AvenirMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'CustomAvenir';
    src: url(${AvenirBlack}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
      font-family: 'CustomAvenir';
      src: url(${AvenirBook}) format('truetype');
      font-weight: 400;
      font-style: normal;
  }

  @font-face {
      font-family: 'CustomAvenir';
      src: url(${AvenirHeavy}) format('truetype');
      font-weight: 900;
      font-style: normal;
  }

  *, **::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "CustomAvenir", sans-serif;
    font-size: 16px;
  }
`; 