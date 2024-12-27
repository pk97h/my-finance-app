import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";
import ExpenseProvider from "./utils/expenseProvider";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: rgb(46, 196, 182);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ExpenseProvider>
        <Router />
      </ExpenseProvider>
    </>
  );
}

export default App;
