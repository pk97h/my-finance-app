import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 15px;
  width: 50%;
  margin: 40px auto;
`;

export const ButtonContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ExpenseFormEditButton = styled.button`
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  text-decoration: none;
`;

export const ExpenseFormDeleteButton = styled.button`
  background-color: rgb(255, 77, 77);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  text-decoration: none;
`;

export const ExpenseFormBackButton = styled.button`
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  text-decoration: none;
`;

export const ExpenseFormDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;