import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fff;
    --gray-light: #ebf2f5;
    --bg-dark: #29B6D1;
    --bg-light: #00C7C7;
    --yellow: #ffd666;
    --cyan-light: #96feff;
    --black-light: rgba(0, 0, 0, 0.6);
    --blue-light: #15c3d6;
    --blue-dark: #17d6eb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--white);
    background: var(--gray-light);
  }

  body,
  input,
  button,
  textarea {
    font: 600 18px Nunito, sans-serif !important;
  }

  input, button, textarea {
    border: 0;
    background: none;
  }

  a {
    text-decoration: none !important;
  }
`
