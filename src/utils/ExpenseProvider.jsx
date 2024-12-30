import { useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

export default function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [newExpense, setNewExpense] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  // 필터
  const filteredMonth = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === selectedMonth;
  });

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        selectedMonth,
        setSelectedMonth,
        newExpense,
        setNewExpense,
        filteredMonth,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}
