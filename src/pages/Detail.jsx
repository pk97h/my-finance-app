import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ButtonContainer,
  DetailContainer,
  ExpenseFormBackButton,
  ExpenseFormDeleteButton,
  ExpenseFormDetail,
  ExpenseFormEditButton,
} from "../styles/DetailStyles";
import { ExpenseFormInput } from "../styles/HomeStyles";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const Detail = () => {
  const { id: paramsId } = useParams();
  const navigate = useNavigate();
  const [detailExpenses, setDetailExpenses] = useState({
    date: "",
    item: "",
    amount: "",
    description: "",
  });

  // supabase 데이터 가져오기
  useEffect(() => {
    const detailFetchData = async () => {
      const { data } = await supabase
        .from("expenses")
        .select("*")
        .eq("id", paramsId)
        .single();
      setDetailExpenses(data);
    };
    detailFetchData();
  }, [paramsId]);

  // 입력값 업데이트
  const handleDetailInputChange = (e) => {
    const { name, value } = e.target;
    setDetailExpenses({ ...detailExpenses, [name]: value });
  };

  // supabase 데이터 업데이트 핸들러
  const handleSubmitDetailExpenses = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!detailExpenses.date) {
      alert("날짜를 입력해주세요.");
      return;
    }
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(detailExpenses.date)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }
    if (!detailExpenses.item) {
      alert("항목을 입력해주세요.");
      return;
    }
    if (!detailExpenses.amount) {
      alert("금액을 입력해주세요.");
      return;
    }
    if (!detailExpenses.description) {
      alert("내용을 입력해주세요.");
      return;
    }

    // supabase 데이터 업데이트
    await supabase
      .from("expenses")
      .update({
        date: detailExpenses.date,
        item: detailExpenses.item,
        amount: detailExpenses.amount,
        description: detailExpenses.description,
      })
      .eq("id", paramsId)
      .select("*");

    navigate("/");
  };

  // supabase 데이터 삭제
  const handleDeleteDetailExpenses = async () => {
    // 삭제 확인
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmDelete) {
      await supabase.from("expenses").delete().eq("id", paramsId);
      navigate("/");
    }
  };

  return (
    <DetailContainer onSubmit={handleSubmitDetailExpenses}>
      <ExpenseFormDetail>
        <label htmlFor="date">날짜</label>
        <ExpenseFormInput
          type="text"
          id="date"
          name="date"
          placeholder="YYYY-MM-DD"
          value={detailExpenses.date}
          onChange={handleDetailInputChange}
        />
      </ExpenseFormDetail>

      <ExpenseFormDetail>
        <label htmlFor="item">항목</label>
        <ExpenseFormInput
          type="text"
          id="item"
          name="item"
          placeholder="지출 항목"
          value={detailExpenses.item}
          onChange={handleDetailInputChange}
        />
      </ExpenseFormDetail>

      <ExpenseFormDetail>
        <label htmlFor="amount">금액</label>
        <ExpenseFormInput
          type="number"
          id="amount"
          name="amount"
          placeholder="지출 금액"
          value={detailExpenses.amount}
          onChange={handleDetailInputChange}
        />
      </ExpenseFormDetail>

      <ExpenseFormDetail>
        <label htmlFor="description">내용</label>
        <ExpenseFormInput
          type="text"
          id="description"
          name="description"
          placeholder="지출 내용"
          value={detailExpenses.description}
          onChange={handleDetailInputChange}
        />
      </ExpenseFormDetail>
      <ButtonContainer>
        <ExpenseFormEditButton type="submit">수정</ExpenseFormEditButton>
        <ExpenseFormDeleteButton
          type="button"
          onClick={handleDeleteDetailExpenses}
        >
          삭제
        </ExpenseFormDeleteButton>
        <ExpenseFormBackButton as={Link} to={"/"}>
          뒤로 가기
        </ExpenseFormBackButton>
      </ButtonContainer>
    </DetailContainer>
  );
};

export default Detail;
