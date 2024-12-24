import { useState } from "react";
import {
  CreateExpenseContainer,
  ExpenseForm,
  ExpenseFormButton,
  ExpenseFormInput,
} from "../styles/HomeStyles";

const CreateExpense = () => {
  const [newExpense, setNewExpense] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <CreateExpenseContainer>
      <ExpenseForm>
        <label htmlFor="date">날짜</label>
        <ExpenseFormInput type="date" id="date" name="date" value={newExpense.date} onChange={handleInputChange}/>
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

      <ExpenseFormButton>저장</ExpenseFormButton>
    </CreateExpenseContainer>
  );
};

export default CreateExpense;
