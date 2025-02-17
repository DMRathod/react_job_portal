import React from 'react'
import { Button, Card, Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

const JobCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card.Root
  width={{ base: '100%', sm: '50%', md: '30%' }} // Adjust card width for responsiveness
  height="250px" // Use auto height for responsiveness
  boxShadow="md"
  borderRadius="md"
  bg="white"
  p={4} // Add padding for spacing
  display="flex"
  flexDirection="column"
  justifyContent="space-between" // Ensure even spacing between sections
  _hover={{ transform: 'scale(1.03)', transition: '0.2s ease-in-out' }} // Add hover effect
>
  {/* Card Body */}
  <Card.Body gap="2" p={1}>
    <Card.Title
      mt={1}
      mb={0}
      fontSize={{ base: 'md', md: 'lg' }} // Responsive font size for title
    >
      {props.job_tittle}
    </Card.Title>
  </Card.Body>

  {/* Description Section */}
  <Box
    flex="1"
    maxHeight="150px" // Limit max height for uniformity
    overflow="hidden" // Hide overflow for long descriptions
    p={2} // Add padding inside the description area
  >
    <Card.Description
      mt={0}
      mb={2}
      fontSize={{ base: 'sm', md: 'md' }} // Responsive font size for description
    >
      {props.Description}
    </Card.Description>
  </Box>

  {/* Footer Section */}
  <Card.Footer justifyContent="flex-end">
    <Button
      colorScheme="blue"
      mt={3}
      size={{ base: 'sm', md: 'md' }} // Responsive button size
      onClick={() => navigate(`/${props.path}`)}
    >
      {props.buttontext}
    </Button>
  </Card.Footer>
</Card.Root>
    
  )
}

export default JobCard