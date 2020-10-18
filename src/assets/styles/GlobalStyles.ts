import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: #fff;
    --gray-light: #ebf2f5;
    --yellow: #ffd666;
    --blue-light: #15c3d6;
    --blue-dark: #17d6eb;
    --cyan-light: #96feff;
    --cyan-dark: #0089a5;
    --bg-dark: #29B6D1;
    --bg-light: #00C7C7;
    --black-light: rgba(0, 0, 0, 0.6);
    --white-light: rgba(255, 255, 255, 0.8);
    --cyan-medium-dark: rgba(23, 142, 166, 0.16);
    --icon: #15B6D6;
    --icon-green: #39CC83;
    --button: #12AFCB;
    --button-green: #3CDC8C;
    --button-green-hover: #36CF82;
    --border: #D3E2E5;
    --border-dashed: #96D2F0;
    --legend: #5C8599;
    --label: #8FA7B3;
    --inputs-bg: #F5F8FA;
    --active: #37C77F;
    --active-border: #A1E9C5;
    --active-bg: #EDFFF6;
    --title: #4D6F80;
    --map-border: #B3DAE2;
    --map-bg: #E6F7FB;
    --leaflet-border: #DDE3F0;
    --hr-border: #D3E2E6;
    --icon-red: #FF669D;
    --dont-open-border: #FFBCD4;
    --dont-open-bg: #FDF8F5;
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
