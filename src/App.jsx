import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: rgb(46, 196, 182)
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
