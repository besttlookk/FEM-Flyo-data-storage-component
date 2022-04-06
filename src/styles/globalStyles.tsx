import { createGlobalStyle } from "styled-components";
import mobileBgImage from "../images/bg-mobile.png";
import desktopBgImage from "../images/bg-desktop.png";
import media from "./media";

const GlobalStyles = createGlobalStyle`

  :root{
    --grad-start: hsl(6, 100%, 80%);
    --grad-stop:  hsl(335, 100%, 65%);

    --col-light: hsl(243, 100%, 93%);
    --col-gray: hsl(229, 7%, 55%);
    --col-blue: hsl(228, 56%, 26%);
    --col-dark: hsl(229, 57%, 11%);

    --font-primary: 'Raleway', sans-serif;

  }
  
  *,*::after, *::before{
    margin:0;
    padding:0;
    box-sizing: inherit;
  }

  html{
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: var(--font-primary);
    background-image: url(${mobileBgImage});
    background-repeat: no-repeat  ;
    background-size: cover;

    ${media.tablet}{
      background-color: var(--col-dark);
      background-image: url(${desktopBgImage});
      background-position: bottom ;
      background-size: 100% 50%;

    }
  }

  main{

    display: flex;
    flex-direction: column;
    gap:2rem;
    width: 85vw;
    margin-inline: auto;
    max-width: 128rem;

    ${media.tablet}{
      flex-direction: row;
      align-items: flex-end;

    }
  }

`;

export default GlobalStyles;
