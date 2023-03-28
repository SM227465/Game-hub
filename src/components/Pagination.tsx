import { Button, ButtonGroup, Flex, HStack } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  onSelectPage: (page: number) => void;
}

const Pagination = (props: Props) => {
  const { onSelectPage } = props;
  const [selectedPage, setSelectedPage] = useState(1);

  const nextPageHandler = () => {
    onSelectPage(selectedPage + 1);
    setSelectedPage(selectedPage + 1);
  };

  const prevPageHandler = () => {
    onSelectPage(selectedPage - 1);
    setSelectedPage(selectedPage - 1);
  };

  return (
    <HStack justifyContent='center' marginTop={5} marginBottom={5}>
      <ButtonGroup>
        <Button isDisabled={selectedPage === 1} onClick={prevPageHandler}>
          Prev
        </Button>
        <Button>{selectedPage}</Button>
        <Button onClick={nextPageHandler}>Next</Button>
      </ButtonGroup>
    </HStack>
  );
};

export default Pagination;
