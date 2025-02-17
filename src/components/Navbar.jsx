import { Box, Flex, useBreakpointValue, Image, Text, Link } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom"; // Use NavLink and useLocation
import { HiBriefcase } from "react-icons/hi";


const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation(); // Get the current location

  const isActive = (path) => location.pathname === path; // Check if the path is active

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bg="#FFFFFF"
      zIndex={1}
      p={isMobile ? 2 : 4}
      boxShadow="sm"
      height="64px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        {/* Left Section: Logo and Title */}
        <Flex alignItems="center">
          <HiBriefcase />
          <NavLink to="/">
          <Text ml={1} fontWeight="bold" fontSize="lg" >
            JobGlu
          </Text>
        </NavLink>
        </Flex>

        {/* Navigation Links */}
        <Flex gap={4}>
          <NavLink
            to="/"
            style={{
              color: isActive("/") ? "#2B2B2B" : "#7D7D7D",
              fontWeight: isActive("/") ? "bold" : "normal",
              borderBottom: isActive("/") ? "2px solid #2B2B2B" : "none",
            }}
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            style={{
              color: isActive("/jobs") ? "#2B2B2B" : "#7D7D7D",
              fontWeight: isActive("/jobs") ? "bold" : "normal",
              borderBottom: isActive("/jobs") ? "2px solid #2B2B2B" : "none",
            }}
          >
            Jobs
          </NavLink>

          <NavLink
            to="/add-job"
            style={{
              color: isActive("/add-job") ? "#2B2B2B" : "#7D7D7D",
              fontWeight: isActive("/add-job") ? "bold" : "normal",
              borderBottom: isActive("/add-job") ? "2px solid #2B2B2B" : "none",
            }}
          >
            Add Job
          </NavLink>

          <NavLink
            to="/about"
            style={{
              color: isActive("/about") ? "#2B2B2B" : "#7D7D7D",
              fontWeight: isActive("/about") ? "bold" : "normal",
              borderBottom: isActive("/about") ? "2px solid #2B2B2B" : "none",
            }}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            style={{
              color: isActive("/contact") ? "#2B2B2B" : "#7D7D7D",
              fontWeight: isActive("/contact") ? "bold" : "normal",
              borderBottom: isActive("/contact") ? "2px solid #2B2B2B" : "none",
            }}
          >
            Contact Us
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
