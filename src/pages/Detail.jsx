import { useNavigate } from "react-router-dom";
import {
  ButtonContainer,
  DetailContainer,
  ExpenseFormBackButton,
  ExpenseFormDeleteButton,
  ExpenseFormEditButton,
} from "../styles/DetailStyles";
import { ExpenseForm, ExpenseFormInput } from "../styles/HomeStyles";

const Detail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <DetailContainer>
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
      <ButtonContainer>
        <ExpenseFormEditButton type="submit">수정</ExpenseFormEditButton>
        <ExpenseFormDeleteButton type="submit">삭제</ExpenseFormDeleteButton>
        <ExpenseFormBackButton onClick={handleBack}>
          뒤로 가기
        </ExpenseFormBackButton>
      </ButtonContainer>
    </DetailContainer>
  );
};

export default Detail;
