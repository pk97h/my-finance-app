import { useState } from "react";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";

const Home = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  return (
    <div>
      <MonthNavigation setSelectedMonth={setSelectedMonth} selectedMonth={selectedMonth} />
      <CreateExpense />
      <ExpenseList selectedMonth={selectedMonth} />
    </div>
  );
};

export default Home;
