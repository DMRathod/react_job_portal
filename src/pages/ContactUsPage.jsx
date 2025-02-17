import React from 'react'
import { Card, Box, Text, VStack, Button, Flex } from "@chakra-ui/react";

const teamMembers = [
    { name: "John Doe", role: "CEO", email: "ceo@jobglu.com", quote: "Innovation and leadership drive success." },
    { name: "Jane Smith", role: "CTO", email: "cto@jobglu.com", quote: "Technology empowers the future of work." },
    { name: "Robert Brown", role: "Legal Advisor", email: "legal@jobglu.com", quote: "Integrity and compliance are our foundation." },
    { name: "Emily White", role: "Lead Marketer", email: "marketing@jobglu.com", quote: "Creativity fuels engagement and growth." },
    { name: "Support Team", role: "Customer Support", email: "support@jobglu.com", quote: "Your success is our priority." },
  ];
  

const ContactUsPage = () => {
  return (
    <Card.Root
    maxW={{ base: "95%", md: "70%", lg: "50%" }}
    p={8}
    boxShadow="2xl"
    borderRadius="xl"
    bg="gray.900"
    textAlign="center"
    mx="auto"
    my={10}
  >
    <Card.Header>
      <Text fontSize="2xl" fontWeight="bold" color="white">Team Glu</Text>
      <Text color="white" mt={2}>
        Get in touch with our key team members.
      </Text>
    </Card.Header>
    <Card.Body>
      <VStack spacing={6} align="stretch">
        {teamMembers.map((member, index) => (
          <Box key={index} p={4} bg="gray.800" borderRadius="md" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold" color="white">{member.name} - {member.role}</Text>
            <Text fontSize="sm" color="white" fontStyle="italic">"{member.quote}"</Text>
            <Text fontSize="sm" mt={2} color="white">{member.email}</Text>
          </Box>
        ))}
      </VStack>
    </Card.Body>
    <Card.Footer>
        <Flex justify="center" width="100%">
        <Button border="2px solid white" _hover={{ bg: "gray.600" }} onClick={() => window.location.href = "mailto:support@remojob.com"}>
            Email Support : support@jobglu.com
        </Button>
      </Flex>
    </Card.Footer>
  </Card.Root>
  )
}

export default ContactUsPage