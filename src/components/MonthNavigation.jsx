import { useContext } from "react";
import { MonthButtonContainer, MonthButton } from "../styles/HomeStyles";
import { ExpenseContext } from "../utils/ExpenseContext";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthNavigation = () => {
  const { selectedMonth, setSelectedMonth } = useContext(ExpenseContext);

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
