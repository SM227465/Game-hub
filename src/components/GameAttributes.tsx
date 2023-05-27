import { SimpleGrid, Text } from '@chakra-ui/react';
import Game from '../interfaces/Game';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';

interface Props {
  game: Game;
}

const GameAttributes = (props: Props) => {
  const { game } = props;
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinitionItem term='Platforms'>
        {game.parent_platforms?.map((pp) => (
          <Text key={pp.platform.id}>{pp.platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Metascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term='Genres'>
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
