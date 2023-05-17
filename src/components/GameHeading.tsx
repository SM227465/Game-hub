import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatform from '../hooks/usePlatform';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = (props: Props) => {
  const { gameQuery } = props;

  const { data: genres } = useGenres();
  const platform = usePlatform(gameQuery.platformId);

  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={3}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
