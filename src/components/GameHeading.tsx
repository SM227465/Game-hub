import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = (props: Props) => {
  const { gameQuery } = props;
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
