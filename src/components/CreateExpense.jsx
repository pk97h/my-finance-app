import { useContext } from "react";
import {
  CreateExpenseContainer,
  ExpenseForm,
  ExpenseFormButton,
  ExpenseFormInput,
} from "../styles/HomeStyles";
import supabase from "../utils/supabase";
import { ExpenseContext } from "../utils/ExpenseContext";

const CreateExpense = () => {
  const { expenses, setExpenses, newExpense, setNewExpense } = useContext(ExpenseContext);

  // supabase 데이터 추가 핸들러
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

    // supabase 데이터 추가
    const { data } = await supabase
      .from("expenses")
      .insert(newExpense)
      .select("*");
    setExpenses([...expenses, ...data]);

    setNewExpense({
      date: "",
      item: "",
      amount: "",
      description: "",
    });
  };

  // 입력값 업데이트
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  return (
    <CreateExpenseContainer onSubmit={handleSubmitExpenses}>
      <ExpenseForm>
        <label htmlFor="date">날짜</label>
        <ExpenseFormInput
          type="text"
          id="date"
          name="date"
          placeholder="YYYY-MM-DD"
          value={newExpense.date}
          onChange={handleInputChange}
        />
      </ExpenseForm>

      <ExpenseForm>
        <label htmlFor="item">항목</label>
        <ExpenseFormInput
          type="text"
          id="item"
          name="item"
          placeholder="지출 항목"
          value={newExpense.item}
          onChange={handleInputChange}
        />
      </ExpenseForm>

      <ExpenseForm>
        <label htmlFor="amount">금액</label>
        <ExpenseFormInput
          type="number"
          id="amount"
          name="amount"
          placeholder="지출 금액"
          value={newExpense.amount}
          onChange={handleInputChange}
        />
      </ExpenseForm>

      <ExpenseForm>
        <label htmlFor="description">내용</label>
        <ExpenseFormInput
          type="text"
          id="description"
          name="description"
          placeholder="지출 내용"
          value={newExpense.description}
          onChange={handleInputChange}
        />
      </ExpenseForm>

      <ExpenseFormButton type="submit">저장</ExpenseFormButton>
    </CreateExpenseContainer>
  );
};

export default CreateExpense;
