import {
  Card,
  CardBody,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Spinner,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (isLoading) {
    return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <GridItem>
          <Skeleton height='35px' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
          {/* <Skeleton height='15px' width='150px' />
          <SkeletonText width='100px' /> */}
        </GridItem>

        <GridItem>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
            {skeletons.map((skeleton) => (
              <Card key={skeleton}>
                <Skeleton height='170px' />
              </Card>
            ))}
          </SimpleGrid>
        </GridItem>
      </SimpleGrid>
    );
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
