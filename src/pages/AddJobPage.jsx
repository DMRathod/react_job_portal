import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Select } from '@chakra-ui/select';
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Input,
    Textarea,
    Heading,
    VStack,
  } from "@chakra-ui/react";
  
const AddJobPage = ({addjobSubmit}) => {
     
        const [jobTitle, setJobTitle] = useState("");
        const [jobType, setJobType] = useState("");
        const [description, setDescription] = useState("");
        const [location, setLocation] = useState("");
        const [salary, setSalary] = useState("");
        const [companyName, setCompanyName] = useState("");
        const [companyDescription, setCompanyDescription] = useState("");
        const [companyEmail, setCompanyEmail] = useState("");
        const [phone, setPhone] = useState("");
        
        const navigate = useNavigate();

        const handleSubmit = (e) => {
            e.preventDefault();
            const jobData = {
              title: jobTitle,
              type: jobType,
              description: description,
              location: location,
              salary: salary,
              company:{
                name: companyName,
                description: companyDescription,
                companyemail: companyEmail,
                contactPhone: phone,
              },              
            };
            console.log("Submitted Data:", jobData);
            addjobSubmit(jobData);
            toast.success("Job Added Successfully"); 
            return navigate('/jobs')            
          };

    
  return (
    <>
    <Flex minH="100vh" align="center" justify="center" p={4}>
      <Box w={{ base: "95%", md: "60%", lg: "40%" }} p={6} bg="white" boxShadow="2xl" borderRadius="lg">
        <Heading mb={6} textAlign="center" fontSize="xl" color="gray.700">
          Add Job
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">
                Job Title
              </FormLabel>
              <Input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Enter job title" size="sm" borderRadius="md" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium">Job Type</FormLabel>
              <Select value={jobType} onChange={(e) => setJobType(e.target.value)}  iconSize={1} placeholder="Select job type" size="sm" borderRadius="md" focusBorderColor="black" bg="white" color="gray.700" borderColor="gray.400" _hover={{ borderColor: "gray.600" }} _focus={{ borderColor: "black", boxShadow: "sm" }}>
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="freelance">Freelance</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Description</FormLabel>
              <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter job description" size="sm" borderRadius="md" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Location</FormLabel>
              <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" size="sm" borderRadius="md" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Salary</FormLabel>
              <Input value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter salary range" size="sm" borderRadius="md" />
            </FormControl>

            <FormLabel fontSize="lg" fontWeight="bold" color="gray.600">Company Info</FormLabel>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Company Name</FormLabel>
              <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Enter company name" size="sm" borderRadius="md" />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Company Description</FormLabel>
              <Textarea value={companyDescription} onChange={(e) => setCompanyDescription(e.target.value)} placeholder="Enter company description" size="sm" borderRadius="md" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Company Email</FormLabel>
              <Input type="email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} placeholder="Enter company email" size="sm" borderRadius="md" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">Phone</FormLabel>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter contact phone" size="sm" borderRadius="md" />
            </FormControl>

            <Button type="submit" width="full" mt={4} size="sm" colorScheme="blackAlpha" borderRadius="md" _hover={{ bg: "blackAlpha.800" }}>
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>

    </>
    
  )
}

export default AddJobPage