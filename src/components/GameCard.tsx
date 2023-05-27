import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { Heading, HStack, Text } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import Game from '../interfaces/Game';
import getCroppedImageUrl from '../services/image-url';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';
import Rating from './Rating';

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  const { game } = props;

  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={2}>
          <PlatformIconList platforms={game.parent_platforms.map((pp) => pp.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>
          <Link to={'/games/' + game.slug}> {game.name}</Link>
        </Heading>
        <Rating rating={game.rating} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
