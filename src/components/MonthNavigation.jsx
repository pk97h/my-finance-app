import { MonthButtonContainer, MonthButton } from "../styles/HomeStyles";

function MonthNavigation({ selectedMonth, setSelectedMonth }) {
  return (
    <MonthButtonContainer>
      {[...Array(12)].map((_, index) => {
        const month = index + 1;
        const isSelected = month === selectedMonth;
        return (
          <MonthButton key={index} onClick={() => setSelectedMonth(month) } isSelected={isSelected}>
            {index + 1}월
          </MonthButton>
        );
      })}
    </MonthButtonContainer>
  );
}

export default MonthNavigation;
