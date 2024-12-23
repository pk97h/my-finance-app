import styled from "styled-components";

export const DetailContainer = styled.div`
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

export const ButtonContainer = styled.div`
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
`;

export const ExpenseFormDeleteButton = styled.button`
  background-color: rgb(255, 77, 77);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
`;

export const ExpenseFormBackButton = styled.button`
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
`;
