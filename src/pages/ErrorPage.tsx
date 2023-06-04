import { Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Flex align='start' justify='center' minHeight='100vh' px={[4, 8, 16, 32]}>
        <motion.div variants={containerVariants} initial='hidden' animate='visible'>
          <Heading size={['xl', '2xl', '3xl']} mb={4}>
            Oops!
          </Heading>
          <Text fontSize={['md', 'lg', 'xl', '2xl']}>
            {isRouteErrorResponse(error)
              ? 'This page does not exist.'
              : 'An unexpected error occurred, We apologize for the inconvenience.'}
          </Text>
        </motion.div>
      </Flex>
    </>
  );
};

export default ErrorPage;
