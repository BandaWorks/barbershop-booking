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
    <div style={{ padding: 16 }}>
      <h1>The Perfecto Barbershop: Booking</h1>
      <p>How you doin'? ͡° ͜ʖ ͡° </p>
    </div>
  </>
);

export { App };
