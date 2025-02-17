import React from 'react'
import { Card } from "@chakra-ui/react";
import { Flex, Button  } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


const AboutUsPage = () => {
    const navigate = useNavigate();
  return (
    <Flex minH="100vh" align="center" justify="center" bg="white" p={4}>
      <Card.Root
        maxW={{ base: "90%", md: "80%", lg: "60%" }}
        p={{ base: 6, md: 8 }}
        boxShadow="2xl"
        borderRadius="lg"
        bg="white"
        textAlign="center"
      >
        <Card.Header fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="gray.700">
          <h2>About JobGlu Portal</h2>
        </Card.Header>
        <Card.Body fontSize={{ base: "sm", md: "md" }} color="gray.600" lineHeight="1.8">
          <p>
            JobGlu Portal is a trusted remote job marketplace, bridging the gap between skilled
            professionals and top global companies. We curate remote job listings across industries,
            ensuring flexibility and work-life balance.
          </p>
          <p>
            Our AI-driven job matching helps job seekers find opportunities tailored to their
            expertise while employers can efficiently manage applications through our hiring
            dashboard.
          </p>
          <p>
            We provide career growth resources, including resume-building tools, interview prep, and
            networking opportunities. Our mission is to redefine the future of work, making remote
            jobs accessible to everyone, regardless of location.
          </p>
        </Card.Body>
        <Card.Footer>
            <Flex justify="center" width="100%">
            <Button  onClick={() => navigate("/contact")}>Learn More</Button>
            </Flex>
            </Card.Footer>
      </Card.Root>
    </Flex>
  )
}

export default AboutUsPage