import { useEffect, useState } from "react";
import { COLORS, PossibleRaffles } from "../../themes";
import * as Styles from "./styles";
import { Ball, Select } from "../../components";
import { getLatestLotteryResults } from "../../services";

interface IRaffleResults {
  concourse: string;
  dozens: string[];
}

function HomePage() {
  const [raffle, setRaffle] = useState<PossibleRaffles>("megasena");
  const [raffleResults, setRaffleResults] = useState<IRaffleResults>({
    concourse: "",
    dozens: [],
  });

  useEffect(() => {
    const fetchResults = async () => {
      const response = await getLatestLotteryResults({ name: raffle });
      if (!response.error) {
        console.log(response.data);
        setRaffleResults({
          concourse: response.data.concurso,
          dozens: [...response.data.dezenas],
        });
      }
    };

    fetchResults();
  }, [raffle]);

  return (
    <Styles.Page>
      <Styles.Theme color={COLORS[raffle]}>
        <Select setOptionSelected={setRaffle} />
        <div className="group">
          <Styles.Icon></Styles.Icon>
          <Styles.Title>{raffle}</Styles.Title>
        </div>
        <Styles.Concourse>
          CONCURSO Nº {raffleResults.concourse}
        </Styles.Concourse>
      </Styles.Theme>
      <div className="ballsgroup">
        <ul>
          {raffleResults.dozens.map((dozen) => (
            <Ball key={dozen} number={dozen} />
          ))}
        </ul>
        <Styles.Copyright>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </Styles.Copyright>
      </div>
    </Styles.Page>
  );
}

export default HomePage;
