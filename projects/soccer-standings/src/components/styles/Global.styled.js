import { createGlobalStyle } from 'styled-components';

/*
=================================
App styles
*/
const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --light-grey: #f8f8f8;
    --yellow: #f4b400;
    --red: #db4437;
    --blue: #4285f4;
    --blue-light: rgba(66, 133, 244, 0.2);
    --green: #34a853;
    --pink: #ff00bf;
    --purple: #6f1ab1;
    --border: #dfdfdf;
    --shadow: #eeeeee;
    --text-p: rgba(0, 0, 0, 0.8);
    --text-h: rgba(0, 0, 0, 0.9);
    --text-light: rgba(0, 0, 0, 0.4);
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
    font-family: Ubuntu, -apple-system;

    /* DELETE */
    background-color: ${({ theme }) => theme.colors.primaryBG};
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li, a {
    color: ${({ theme }) => theme.colors.paragraph};
  }
  p {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.paragraph};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.heading};
  }
  table {
    width: 100%;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.paragraph};
    box-shadow: ${({ theme }) => theme.styles.boxShadow};
    border-collapse: collapse;
    overflow-x: auto;
  }
  th, td {
    text-align: left;
  }
  th {
    padding: 0.5rem;
    font-size: 0.8rem;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.secondaryBG};
    color: ${({ theme }) => theme.colors.paragraphLight};
  }
  td {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0.75rem;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;

export default GlobalStyles;
