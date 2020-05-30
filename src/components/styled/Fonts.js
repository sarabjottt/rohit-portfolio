import { createGlobalStyle } from 'styled-components';
import prata from '../../assets/fonts/Prata.woff2';
import display from '../../assets/fonts/Serif-Display.woff2';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${prata}) format("woff2");
    font-display: fallback;
  }
  @font-face {
    font-family: 'Serif Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${display}) format("woff2");
    font-display: fallback;
  }`;

export default Fonts;
