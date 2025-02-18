import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
  Button,
  Box,
  Flex,
  useBreakpointValue,
  Text,
  Portal,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { HiBriefcase } from "react-icons/hi";
import { CgMenuOreos } from "react-icons/cg"; // Updated menu icon
import { useState } from "react"; // Importing useState for managing menu open state

const NavBar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // Managing the open/close state of the menu

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/jobs", label: "Jobs" },
    { to: "/add-job", label: "Add Job" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bg="white"
      zIndex={10}
      p={4}
      boxShadow="sm"
      height="64px"
    >
      <Flex justifyContent="space-between" alignItems="center">
        {/* Left Section: Logo */}
        <Flex alignItems="center">
          <HiBriefcase size={24} />
          <NavLink to="/">
            <Text ml={2} fontWeight="bold" fontSize="lg">
              JobGlu
            </Text>
          </NavLink>
        </Flex>

        {/* Navigation: Menu for Mobile, Full Navbar for Larger Screens */}
        {isMobile ? (
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="ghost" _hover={{ bg: "transparent" }} onClick={toggleMenu}>
                <CgMenuOreos size={28} />
              </Button>
            </MenuTrigger>
            {isOpen && (
              <Portal> {/* Ensures menu overlays content instead of shifting it */}
                <MenuContent
                  position="fixed"
                  top={0}
                  right={0}  // Positioning the menu to the right
                  width="200px" // Sidebar width
                  height="40%" // Full height of the viewport
                  bg="white"
                  boxShadow="lg"
                  zIndex={20}
                  p={4}
                  display="flex"
                  flexDirection="column"
                >
                  {/* Close Button */}
                  <Button onClick={toggleMenu} mb={4} variant="ghost">Close</Button>
                  {navLinks.map(({ to, label }) => (
                    <MenuItem key={to} as={NavLink} to={to} onClick={() => setIsOpen(false)}>
                      {label}
                    </MenuItem>
                  ))}
                </MenuContent>
              </Portal>
            )}
          </MenuRoot>
        ) : (
          <Flex gap={6}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={{
                  color: isActive(to) ? "#2B2B2B" : "#7D7D7D",
                  fontWeight: isActive(to) ? "bold" : "normal",
                  borderBottom: isActive(to) ? "2px solid #2B2B2B" : "none",
                }}
              >
                {label}
              </NavLink>
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default NavBar;
