import { ChangeEventHandler } from "react";
import * as Styles from "./styles";
import { PossibleRaffles } from "../../themes";

interface SelectProps {
  setOptionSelected: (newValue: PossibleRaffles) => void;
}

const RAFFLE_OPTIONS = [
  "megasena",
  "quina",
  "lotofacil",
  "lotomania",
  "timemania",
  "diadesorte",
];

function Select({ setOptionSelected }: SelectProps) {
  const onChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    console.log(event.target.value);
    setOptionSelected(event.target.value as PossibleRaffles);
  };

  return (
    <Styles.Select
      defaultValue={RAFFLE_OPTIONS[0]}
      onChange={onChange}
      name="raffle"
    >
      {RAFFLE_OPTIONS.map((option, index) => (
        <option key={option + index} value={option}>
          {option}
        </option>
      ))}
    </Styles.Select>
  );
}

export default Select;
