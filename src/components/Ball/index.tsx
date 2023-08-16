import * as Styles from "./styles";

interface BallProps {
  number: string;
}

function Ball({ number }: BallProps) {
  return <Styles.Ball>{number}</Styles.Ball>;
}

export default Ball;
