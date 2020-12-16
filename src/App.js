import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
`;

const App = () => (
  <>
    <BaseStyle />
    <p>Joey: How you doin'? ͡° ͜ʖ ͡° </p>
  </>
);

export { App };
