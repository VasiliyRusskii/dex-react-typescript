import { createGlobalStyle } from "styled-components";
import  AvenirMedium  from "./assets/fonts/AvenirLTPro-Medium.woff2";
import AvenirBook from "./assets/fonts/Avenir Book Oblique.woff2"

// const AvenirMedium = require("./assets/fonts/AvenirLTPro-Medium.woff2")

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: AvenirMediumlt;
        src: url(${AvenirMedium});
        font-style: italic;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        color: blue;
        font-family: AvenirMediumlt;
   }
`;
export default GlobalStyles;