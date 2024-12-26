import {
  CreateExpenseContainer,
  ExpenseForm,
  ExpenseFormButton,
  ExpenseFormInput,
} from "../styles/HomeStyles";

const CreateExpense = ({
  newExpense,
  handleInputChange,
  handleSubmitExpenses,
}) => {
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
