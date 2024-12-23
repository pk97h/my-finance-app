import { useNavigate } from "react-router-dom";
import {
  Expense,
  ExpenseDateTitle,
  ExpenseListContainer,
} from "../styles/HomeStyles";

const ExpenseList = () => {
  const navigate = useNavigate()

  const handleDetail = () => {
    navigate("/expenses/2");
  };

  return (
    <ExpenseListContainer>
      <Expense onClick={handleDetail}>
        <ExpenseDateTitle>
          <p>2024-01-01</p>
          <p>햄버거</p>
          <p>내용</p>
        </ExpenseDateTitle>
        <p>2000원</p>
      </Expense>
      <Expense>
        <ExpenseDateTitle>
          <p>2024-01-01</p>
          <p>햄버거</p>
          <p>내용</p>
        </ExpenseDateTitle>
        <p>2000원</p>
      </Expense>
      <Expense>
        <ExpenseDateTitle>
          <p>2024-01-01</p>
          <p>햄버거</p>
          <p>내용</p>
        </ExpenseDateTitle>
        <p>2000원</p>
      </Expense>
    </ExpenseListContainer>
  );
};

export default ExpenseList;
