import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      minHeight="100vh"
      bg="gray.100"
      px={4}
    >
      <Heading as="h1" size="2xl" mb={4} color="gray.800">
        404
      </Heading>
      <Text fontSize="lg" mb={6} color="gray.600">
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Link to="/">
        <Button colorScheme="teal" size="lg">
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
