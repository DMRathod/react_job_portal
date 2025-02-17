import React from 'react';
import { Box, Button, Flex, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';



const Hero = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
    color="#2C2C2C"
    as="section"
    position="relative"
    width="100vw"
    bg="#FFFFFF"
    py={{ base: 4, md: 16 }} // Padding for top and bottom
    mt="64px" // Adjust for the fixed navbar height (use the height of your navbar here)
  >
    <Flex
      alignItems="center" // Vertically center the content
      justifyContent="center" // Horizontally center the content
      flexDirection={{ base: 'column', md: 'row' }} // Stack on mobile, row on desktop
      gap={{ base: 6, md: 12 }} // Space between elements
      px={{ base: 4, md: 6 }} // Padding on the sides
      maxWidth="1200px" // Limit content width for large screens
      mx="auto" // Center content horizontally
      textAlign="center" // Center text
    >
      {/* Left Section: Text Content */}
      <Box maxW="100%" textAlign="center">
        <Heading as="h1" size="2xl" mb={4} color="#333333">
          Find Your Dream Job
        </Heading>
        <Text fontSize="lg" color="#333333" mb={6}>
          Explore thousands of opportunities in various industries. Connect with top employers and take the next step in your career today.
        </Text>
        {/* <Button
          size="lg"
          colorScheme="blue"
          px={8}
          color="black.100"
          onClick={() => window.location.href = '/jobs'}
        >
          Browse Jobs
        </Button> */}
      </Box>
    </Flex>
  </Box>
  )
}

export default Hero