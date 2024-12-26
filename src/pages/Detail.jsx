import { Link } from "react-router-dom";
import {
  ButtonContainer,
  DetailContainer,
  ExpenseFormBackButton,
  ExpenseFormDeleteButton,
  ExpenseFormDetail,
  ExpenseFormEditButton,
} from "../styles/DetailStyles";
import { ExpenseFormInput } from "../styles/HomeStyles";

const Detail = () => {
  return (
    <DetailContainer>
      <ExpenseFormDetail>
        <label htmlFor="date">날짜</label>
        <ExpenseFormInput
          type="text"
          id="date"
          name="date"
          placeholder="YYYY-MM-DD"
        />
      </ExpenseFormDetail>

      <ExpenseFormDetail>
        <label htmlFor="item">항목</label>
        <ExpenseFormInput type="text" id="item" placeholder="지출 항목" />
      </ExpenseFormDetail>

      <ExpenseFormDetail>
        <label htmlFor="amount">금액</label>
        <ExpenseFormInput type="number" id="amount" placeholder="지출 금액" />
      </ExpenseFormDetail>

      <ExpenseFormDetail>
        <label htmlFor="description">내용</label>
        <ExpenseFormInput
          type="text"
          id="description"
          placeholder="지출 내용"
        />
      </ExpenseFormDetail>
      <ButtonContainer>
        <ExpenseFormEditButton type="submit">수정</ExpenseFormEditButton>
        <ExpenseFormDeleteButton type="submit">삭제</ExpenseFormDeleteButton>
        <ExpenseFormBackButton as={Link} to={"/"}>
          뒤로 가기
        </ExpenseFormBackButton>
      </ButtonContainer>
    </DetailContainer>
  );
};

export default Detail;
