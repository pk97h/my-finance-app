import { MonthButtonContainer, MonthButton } from "../styles/HomeStyles";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthNavigation = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <MonthButtonContainer>
      {MONTHS.map((element) => {
        return (
          <MonthButton
            key={element}
            selected={selectedMonth === element}
            onClick={() => setSelectedMonth(element)}
          >
            {`${element}월`}
          </MonthButton>
        );
      })}
    </MonthButtonContainer>
  );
}

export default MonthNavigation;
