import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
  --white: #fff;
  --black: #000;
  --grey: #2f2f2f;
  --lightGrey: #e0e0e0;
  --burlywood: #deb887;
  --maxWidth: 1800px;
  }
  :focus {
    outline: 3px auto var(--grey);
  }
  html{
    font-family: "Prata", "Times New Roman", serif;
    font-size: 16px;
  }
  body{
    font-family: "Prata", serif;
    color: var(--black);
    font-size: 2rem;
    margin: 0
  }
  .container{
    max-width: var(--maxWidth);
    margin: 0 auto;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: "Serif Display";
    font-weight: 400;
    line-height: 1.2;
    letter-spacing:1px;
  }
  a {
    color: var(--dark);
    text-decoration: none;
  }
  li a:hover{
    border-bottom:1px solid var(--lightGrey);
  }
  main a[href] {
    border-bottom:1px solid var(--lightGrey);
  }
  button{
    background-color:inherit;
    border:inherit;
    &:focus{
      outline:none;
    }
  }
  p, ul, ol {
    line-height: 1;
    font-weight: 400;
    padding:0;
  }
  ul {
    list-style-type: none;
    margin: 0;
  }
  ::selection{
    color: var(--black);
    background-color: var(--burlywood);
  }
@media (max-width: 600px) {
  html{
    font-size:13px
  }
}
`;
export default GlobalStyle;
