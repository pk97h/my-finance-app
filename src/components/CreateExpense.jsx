import {
  CreateExpenseContainer,
  ExpenseForm,
  ExpenseFormButton,
  ExpenseFormContainer,
  ExpenseFormInput,
} from "../styles/HomeStyles";

const CreateExpense = () => {
  return (
    <CreateExpenseContainer>
      <ExpenseFormContainer>
        <ExpenseForm>
          <label>날짜</label>
          <ExpenseFormInput type="date" name="date" />
        </ExpenseForm>

        <ExpenseForm>
          <label>항목</label>
          <ExpenseFormInput type="text" placeholder="지출 항목" />
        </ExpenseForm>

        <ExpenseForm>
          <label>금액</label>
          <ExpenseFormInput type="number" placeholder="지출 금액" />
        </ExpenseForm>

        <ExpenseForm>
          <label>내용</label>
          <ExpenseFormInput type="text" placeholder="지출 내용" />
        </ExpenseForm>

        <ExpenseFormButton type="submit">저장</ExpenseFormButton>
      </ExpenseFormContainer>
    </CreateExpenseContainer>
  );
};

export default CreateExpense;
