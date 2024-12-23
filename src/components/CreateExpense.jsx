import {
  CreateExpenseContainer,
  ExpenseForm,
  ExpenseFormButton,
  ExpenseFormInput,
} from "../styles/HomeStyles";

const CreateExpense = () => {
  return (
    <CreateExpenseContainer>
      <ExpenseForm>
        <label htmlFor="date">날짜</label>
        <ExpenseFormInput type="date" id="date" name="date" />
      </ExpenseForm>

      <ExpenseForm>
        <label htmlFor="title">항목</label>
        <ExpenseFormInput type="text" id="title" placeholder="지출 항목" />
      </ExpenseForm>

      <ExpenseForm>
        <label htmlFor="price">금액</label>
        <ExpenseFormInput type="number" id="price" placeholder="지출 금액" />
      </ExpenseForm>

      <ExpenseForm>
        <label htmlFor="content">내용</label>
        <ExpenseFormInput type="text" id="content" placeholder="지출 내용" />
      </ExpenseForm>

      <ExpenseFormButton type="submit">저장</ExpenseFormButton>
    </CreateExpenseContainer>
  );
};

export default CreateExpense;
