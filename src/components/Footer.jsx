import React from 'react';
import { Box, Text, Stack, HStack, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
    as="footer"
    width="100%"
    bg="gray.900"
    color="white"
    py={8}
    px={4}
    mt="auto" // Ensures the footer is pushed to the bottom when content is short
  >
    {/* Footer Content */}
    <Stack maxW="1200px" mx="auto" spacing={8}>
      {/* Top Section */}
      <HStack justify="space-between" align="flex-start" flexWrap="wrap" spacing={4}>
        {/* About */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            About JobGlu 
          </Text>
          <Text fontSize="sm">
          JobGlu connects job seekers with top employers. Explore opportunities, grow your career, and find your dream job today.
          </Text>
        </Box>

        {/* Quick Links */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4} color="#FFFFFF">
            Quick Links
          </Text>
          <Stack spacing={2}>
            <Link href="/" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
              Home
            </Link>
            <Link href="/jobs" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
              Jobs
            </Link>
            <Link href="/about" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
              About Us
            </Link>
            <Link href="/contact" _hover={{ textDecoration: 'underline' }} color="#FFFFFF">
              Contact Us
            </Link>
          </Stack>
        </Box>

        {/* Contact */}
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={4}>
            Contact Us
          </Text>
          <Stack spacing={2}>
            <Text fontSize="sm">Email: support@jobglu.com</Text>
            <Text fontSize="sm">Phone: +1 (123) 456-7890</Text>
            <Text fontSize="sm">Address: 123 Career St, JobCity, JC 10101</Text>
          </Stack>
        </Box>
      </HStack>

      {/* Bottom Section */}
      <Stack direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
        {/* Copyright */}
        <Text fontSize="sm">© {new Date().getFullYear()} JobGlu. All rights reserved.</Text>

        {/* Social Media Links */}
        <HStack spacing={10}>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={6} color="#FFFFFF" _hover={{ color: "#8b9dc3" }} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={6} color="#FFFFFF" _hover={{ color: "#80d4f7" }} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedin} boxSize={6} color="#FFFFFF" _hover={{ color: "#66b3e4" }} />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={6} color="#FFFFFF" _hover={{ color: "#f77737" }} />
          </Link>
        </HStack>
      </Stack>
    </Stack>
  </Box>
  )
}

export default Footer