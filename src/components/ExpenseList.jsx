import { useNavigate } from "react-router-dom";
import {
  Expense,
  ExpenseDateTitle,
  ExpenseListContainer,
} from "../styles/HomeStyles";
import supabase from "../utils/supabase";
import { useEffect, useState } from "react";

const ExpenseList = ({ selectedMonth }) => {
  const navigate = useNavigate();

  const [formStates, setFormStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("expenses").select();
        if (error) {
          console.log('error => ', error)
          return;
        }
        setFormStates(data);
      } catch (error) {
        console.log('error => ', error)
      }
    };
    fetchData();
  }, []);

  const filteredExpenses = selectedMonth
  ? formStates.filter((expense) => {
      const expenseMonth = new Date(expense.date).getMonth() + 1;
      return expenseMonth === selectedMonth;
    })
  : formStates;

  const handleDetail = (id) => {
    navigate(`/expenses/${id}`);
  };

  return (
    <ExpenseListContainer>
      {filteredExpenses.map((expense) => (
        <Expense
          key={expense.id}
          onClick={() => {
            handleDetail(expense.id);
          }}
        >
          <ExpenseDateTitle>
            <p>{expense.date}</p>
            <p>{expense.item}</p>
            <p>{expense.description}</p>
          </ExpenseDateTitle>
          <p>{expense.amount}원</p>
        </Expense>
      ))}
    </ExpenseListContainer>
  );
};

export default ExpenseList;
