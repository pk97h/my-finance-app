import { MonthButtonContainer, MonthButton } from "../styles/HomeStyles";

function MonthNavigation() {
  return (
    <MonthButtonContainer>
      {[...Array(12)].map((_, index) => (
        <MonthButton key={index}>{index + 1}월</MonthButton>
      ))}
    </MonthButtonContainer>
  );
}

export default MonthNavigation;
