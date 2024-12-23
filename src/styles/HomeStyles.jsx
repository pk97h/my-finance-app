import styled from "styled-components";

export const MonthButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  margin: 40px auto;
`;

export const MonthButton = styled.button`
  padding: 15px;
  gap: 10px;
  border: none;
  border-radius: 8px;
  background-color: rgb(246, 247, 250);
  cursor: pointer;
  width: 15%;
  margin: auto;

  &:hover {
    background-color: rgb(46, 196, 182);
  }
`;

export const CreateExpenseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  margin: 40px auto;
  align-items: flex-end;
`;

export const ExpenseForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const ExpenseFormInput = styled.input`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  padding: 8px;
  width: 90%;
  font-size: 14px;
`;

export const ExpenseFormButton = styled.button`
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
`;

export const ExpenseListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  margin: 40px auto;
`;

export const Expense = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: rgb(249, 249, 249);
  border:none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  cursor: pointer;
  color: rgb(0, 123, 255);
  font-weight: bold;
`;

export const ExpenseDateTitle = styled.div`
  display:flex;
  align-items:start;
  flex-direction: column;  
`