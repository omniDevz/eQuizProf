import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;

  --box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.48);
  --text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  min-height: 100vh;
}

body {
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.tertiary};
  font-family: 'Roboto', sans-serif;
  line-height: 1.4;
  font-size: 1.8rem;
}

h1, h2, h3, h4, h5, h6 {
  color: ${(props) => props.theme.colors.primary};
  font: normal 4rem 'Ubuntu', sans-serif;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

li {
  list-style: none;
}

button {
  border: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

button:focus {
  outline: none;
}

input::-webkit-calendar-picker-indicator {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

div, section, article, footer, #root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.react-toast-notifications__toast {
  flex-direction: row;

  div {
    height: 100%;
  }
}

fieldset {
  border: none;
}

`;
