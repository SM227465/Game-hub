import { Card, CardBody } from '@chakra-ui/card';
import { Image } from '@chakra-ui/image';
import { Heading, HStack, Text } from '@chakra-ui/layout';
import React from 'react';
import { Game } from '../hooks/useGames';
import CriticScore from './CriticScore';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  const { game } = props;

  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={game.parent_platforms.map((pp) => pp.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
