import {
  Expense,
  ExpenseDateTitle,
  ExpenseListContainer,
} from "../styles/HomeStyles";

const ExpenseList = () => {
  return (
    <ExpenseListContainer>
      <Expense>
        <ExpenseDateTitle>
          <p>2024-01-01</p>
          <p>햄버거</p>
        </ExpenseDateTitle>
        <p>2000원</p>
      </Expense>
      <Expense>
        <ExpenseDateTitle>
          <p>2024-01-01</p>
          <p>햄버거</p>
        </ExpenseDateTitle>
        <p>2000원</p>
      </Expense>
    </ExpenseListContainer>
  );
};

export default ExpenseList;
