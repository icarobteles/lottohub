import { useEffect, useState } from "react";
import { COLORS } from "../../themes";
import * as Styles from "./styles";
import { Ball, Select } from "../../components";
import { getLatestLotteryResults } from "../../services";
import {
  IGetLatestLotteryResponseAPI,
  IPossibleRaffles,
} from "../../interfaces";

function HomePage() {
  const [raffle, setRaffle] = useState<IPossibleRaffles>(
    IPossibleRaffles.Megasena
  );
  const [raffleResults, setRaffleResults] =
    useState<IGetLatestLotteryResponseAPI>({
      concourse: "",
      data: "",
      dozens: [],
    });

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getLatestLotteryResults({ name: raffle });
      if (!response.error) {
        const { concurso, data, dezenas } = response.data;
        setRaffleResults({
          concourse: concurso,
          data: data,
          dozens: [...dezenas],
        });
      }
    };

    fetchResults();
  }, [raffle]);

  return (
    <Styles.Container>
      <Styles.Header theme={COLORS[raffle]}>
        <Select setOptionSelected={setRaffle} />
        <Styles.Logo>
          <Styles.LogoIcon />
          <Styles.LogoTitle>{raffle}</Styles.LogoTitle>
        </Styles.Logo>
        <Styles.Concourse>
          CONCURSO
          <Styles.ConcourseNumber>
            Nº {raffleResults.concourse}
          </Styles.ConcourseNumber>
          <Styles.ConcourseNumberAndData>
            {raffleResults.concourse} - {raffleResults.data}
          </Styles.ConcourseNumberAndData>
        </Styles.Concourse>
      </Styles.Header>
      <Styles.Main>
        <Styles.BallsList>
          {raffleResults.dozens.map((dozen) => (
            <Ball key={dozen} number={dozen} />
          ))}
        </Styles.BallsList>
        <Styles.Copyright>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Styles.Copyright>
      </Styles.Main>
    </Styles.Container>
  );
}

export default HomePage;
