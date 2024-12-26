import { useEffect, useState } from "react";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import MonthNavigation from "../components/MonthNavigation";
import supabase from "../utils/supabase";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [newExpense, setNewExpense] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  // 데이터 가져오기

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data } = await supabase.from("expenses").select("*");
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  // 필터

  const filteredMonth = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === selectedMonth;
  });

  // 입력값 업데이트

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  // 데이터 추가

  const handleSubmitExpenses = async (e) => {
    e.preventDefault();

    // 유효성검사

    if (!newExpense.date) {
      alert("날짜를 입력해주세요.");
      return;
    }
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(newExpense.date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!newExpense.item) {
      alert("항목을 입력해주세요.");
      return;
    }
    if (!newExpense.amount) {
      alert("금액을 입력해주세요.");
      return;
    }
    if (!newExpense.description) {
      alert("내용을 입력해주세요.");
      return;
    }

    await supabase.from("expenses").insert(newExpense).select("*");

    setExpenses([...expenses, newExpense]);

    setNewExpense({
      date: "",
      item: "",
      amount: "",
      description: "",
    });
  };

  return (
    <div>
      <MonthNavigation
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <CreateExpense
        newExpense={newExpense}
        handleInputChange={handleInputChange}
        handleSubmitExpenses={handleSubmitExpenses}
      />
      <ExpenseList filteredMonth={filteredMonth} />
    </div>
  );
};

export default Home;
