import { createGlobalStyle } from "styled-components";

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};
setScreenSize();

const GlobalStyle = createGlobalStyle`
  :root {
    --white: hsl(0, 0%, 100%);
    --black: hsl(210, 8%, 5%);
    --orange: hsl(27, 90%, 55%);
    --yellow: hsl(47, 83%, 91%);
    --green: hsl(140, 40%, 55%);
    --blue: hsl(206, 100%, 40%);
    --powder: hsl(205, 46%, 92%);
    --red: hsl(358, 62%, 52%);
    --black-025: hsl(210, 8%, 97.5%);
    --black-050: hsl(210, 8%, 95%);
    --black-075: hsl(210, 8%, 90%);
    --black-100: hsl(210, 8%, 85%);
    --black-150: hsl(210, 8%, 80%);
    --black-200: hsl(210, 8%, 75%);
    --black-300: hsl(210, 8%, 65%);
    --black-350: hsl(210, 8%, 60%);
    --black-400: hsl(210, 8%, 55%);
    --black-500: hsl(210, 8%, 45%);
    --black-600: hsl(210, 8%, 35%);
    --black-700: hsl(210, 8%, 25%);
    --black-750: hsl(210, 8%, 20%);
    --black-800: hsl(210, 8%, 15%);
    --black-900: hsl(210, 8%, 5%);
    --orange-050: hsl(27, 100%, 97%);
    --orange-100: hsl(27, 95%, 90%);
    --orange-200: hsl(27, 90%, 83%);
    --orange-300: hsl(27, 90%, 70%);
    --orange-400: hsl(27, 90%, 55%);
    --orange-500: hsl(27, 90%, 50%);
    --orange-600: hsl(27, 90%, 45%);
    --orange-700: hsl(27, 90%, 39%);
    --orange-800: hsl(27, 87%, 35%);
    --orange-900: hsl(27, 80%, 30%);
    --blue-050: hsl(206, 100%, 97%);
    --blue-100: hsl(206, 96%, 90%);
    --blue-200: hsl(206, 93%, 83.5%);
    --blue-300: hsl(206, 90%, 69.5%);
    --blue-400: hsl(206, 85%, 57.5%);
    --blue-500: hsl(206, 100%, 52%);
    --blue-600: hsl(206, 100%, 40%);
    --blue-700: hsl(209, 100%, 37.5%);
    --blue-800: hsl(209, 100%, 32%);
    --blue-900: hsl(209, 100%, 26%);
    --powder-050: hsl(205, 47%, 97%);
    --powder-100: hsl(205, 46%, 92%);
    --powder-200: hsl(205, 53%, 88%);
    --powder-300: hsl(205, 57%, 81%);
    --powder-400: hsl(205, 56%, 76%);
    --powder-500: hsl(205, 41%, 63%);
    --powder-600: hsl(205, 36%, 53%);
    --powder-700: hsl(205,47%,42%);
    --fs-base: 15px;
    --fs-normal: 13px;
    --fs-small: 12px;
    --fs-headline: 21px;
    --fs-headline1: 27px;
    --fs-headline2: 21px;
    --fs-headline3: 17px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    background: unset;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    vertical-align: middle;
    text-decoration-line: none;
  }

  body {
    font-size: var(--fs-base);
  }

  #root {
    width: 100vw;
    height : auto;
    position: relative;
    display: flex;
    flex-direction : column;
    justify-content: center;
  }
`;

export default GlobalStyle;
