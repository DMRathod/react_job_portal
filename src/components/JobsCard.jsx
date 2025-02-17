import React from 'react'
import { Button, Card, Box, Link, HStack } from "@chakra-ui/react"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const JobsCard = (props) => {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxLength = 90; // Maximum length for the truncated description

  // Adjust description based on whether full content is shown
  const description =
    !showFullDescription && props.Description.length > maxLength
      ? props.Description.substring(0, maxLength) + "..."
      : props.Description;


  return (
    <Card.Root
    width={{ base: "100%", sm: "48%", md: "30%" }} // Full width on mobile, 2 cards on small screens, 3 on larger
    minHeight="200px" // Set a consistent height for all cards
    boxShadow="md"
    borderRadius="md"
    bg="white"
    p={2}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    _hover={{ transform: 'scale(1.01)', transition: '0.1s ease-in-out' }} // Add hover effect
  >
    {/* Header */}
    <Card.Header
      p={1}
      borderTopRadius="md"
      // textAlign="left"
      fontSize={{ base: "sm", md: "md" }}
    >
      {props.type}
    </Card.Header>

    {/* Card Body */}
    <Card.Body gap={2} p={1}>
      <Card.Title
        mt={0}
        mb={1}
        fontSize={{ base: "md", md: "lg" }}
        noOfLines={1} // Ensures title stays within 2 lines
      >
        {props.job_tittle}
      </Card.Title>
    </Card.Body>

    {/* Description with Toggle */}
    <Box flex="1" p={2} overflow="hidden">
      <Card.Description mt={0} mb={2} fontSize={{ base: "sm", md: "md" }}>
        {description}
        <br />
        {props.Description.length > maxLength && (
          <Link
            color="blue.400"
            fontSize="sm"
            onClick={() => setShowFullDescription((prev) => !prev)}
            mt={1}
            display="inline-block"
            cursor="pointer"
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </Link>
        )}
      </Card.Description>
    </Box>

    {/* Footer with Salary, Location, and Button */}
    <HStack
      justify="space-between"
      align="center"
      w="full"
      mt={1}
      wrap="wrap"
      gap={2}
    >
      <Box fontSize={{ base: "xs", md: "sm" }} color="gray.600">
        📍 {props.location} <br />
        💰 {props.salary}
      </Box>

      <Card.Footer>
        <Button
          colorScheme="blue"
          size={{ base: "sm", md: "md" }}
          onClick={() => navigate(`/jobs/${props.jobId}`)}
        >
          {props.buttontext}
        </Button>
      </Card.Footer>
    </HStack>
  </Card.Root>
  
  )
}

export default JobsCard