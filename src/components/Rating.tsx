import { HStack } from '@chakra-ui/react';
import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

interface Props {
  rating: number;
  //   rating_top: number;
}

const Rating = (props: Props) => {
  const { rating } = props;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<BsStarHalf key={fullStars} />);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={fullStars + i + (hasHalfStar ? 1 : 0)} />);
  }

  return (
    <HStack spacing={5} marginTop={1}>
      {stars}
    </HStack>
  );
};

export default Rating;
