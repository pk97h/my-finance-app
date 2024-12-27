import { useContext, useEffect } from "react";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";
import supabase from "../utils/supabase";
import { ExpenseContext } from "../utils/ExpenseContext";

const Home = () => {
  const { setExpenses } = useContext(ExpenseContext);
  // supabase 데이터 가져오기
  useEffect(() => {
    const fetchExpenses = async () => {
      const { data } = await supabase.from("expenses").select("*");
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <MonthNavigation />
      <CreateExpense />
      <ExpenseList />
    </div>
  );
};

export default Home;
