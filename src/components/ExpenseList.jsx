import { Link } from "react-router-dom";
import {
  Expense,
  ExpenseDateTitle,
  ExpenseListContainer,
} from "../styles/HomeStyles";
import { useContext } from "react";
import { ExpenseContext } from "../utils/ExpenseContext";

const ExpenseList = () => {
  const { filteredMonth } = useContext(ExpenseContext);

  return (
    <ExpenseListContainer>
      {filteredMonth.map((expense) => (
        <Expense key={expense.id} as={Link} to={`/expenses/${expense.id}`}>
          <ExpenseDateTitle>
            <p className="expenseDate">{expense.date}</p>
            <p>
              {expense.item} - {expense.description}
            </p>
          </ExpenseDateTitle>
          <p>{expense.amount}원</p>
        </Expense>
      ))}
    </ExpenseListContainer>
  );
};

export default ExpenseList;
