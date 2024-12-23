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
`;

export const ExpenseFormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap:10px;
`

export const ExpenseForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex: 1 1 0%;
    
`

export const ExpenseFormInput = styled.input`
border: 1px solid rgb(221, 221, 221);
  border-radius: 8px;
  width:100px
`

export const ExpenseFormButton = styled.button`
  background-color:rgb(0, 123, 255);
  color:white;
  border: none;
  border-radius: 8px;
`