import { createGlobalStyle } from 'styled-components'
import { colors } from './variable'

const size = {
  mobile: '576px',
  tablet: '768px',
  laptop: '1200px',
  desktop: '2560px'
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;
    line-height: 1.5;
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }

  ul, p {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    color: ${colors.link};
    text-decoration: none;
  }

  .ReactModal__Content__modal {
    background: white;
    border: 1px solid lightgray;
    margin: 16px auto;
    padding: 16px;
    width: 60%;
    outline: none;
    bottom: auto !important;
    top: 15% !important;

    @media ${device.mobile} {
      width: 100%;
      height: 100vh;
      margin: 0;
      right: 0 !important;
      left: 0 !important;
      top: 0 !important;
    }
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .toast-success {
    background: ${colors.success};
    color: white;
  }

  .toast-error {
    background: ${colors.danger};
    color: white;
  }

  .Toastify__close-button {
    color: white;
  }
`
