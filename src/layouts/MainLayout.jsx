import { Outlet } from 'react-router-dom'
import { Box, Flex } from "@chakra-ui/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MainLayout = () => {
  return (
    <Flex direction="column" minH="100vh">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <Box as="main" pt="64px"> {/* Add margin or padding to avoid overlap */}
        <Outlet />
      </Box>

      {/* Footer */}
      <ToastContainer /> 
      <Footer />
    </Flex>
  )
}

export default MainLayout