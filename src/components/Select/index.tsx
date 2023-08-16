import { ChangeEventHandler } from "react";
import { IPossibleRaffles } from "../../interfaces";
import * as Styles from "./styles";

interface SelectProps {
  setOptionSelected: (newValue: IPossibleRaffles) => void;
}

function Select({ setOptionSelected }: SelectProps) {
  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.target.value as IPossibleRaffles;
    setOptionSelected(selectedValue);
  };

  return (
    <Styles.Select
      defaultValue={IPossibleRaffles.Megasena}
      onChange={onChange}
      name="raffle"
    >
      {Object.values(IPossibleRaffles).map((option, index) => (
        <option key={option + index} value={option}>
          {option}
        </option>
      ))}
    </Styles.Select>
  );
}

export default Select;
