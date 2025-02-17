import React from 'react'
import { useLocation } from "react-router-dom";
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

const EditjobPage = ({editjobSubmit}) => {
    const data = useLocation();
    const{ job, id } = data.state || {};
    const [jobTitle, setJobTitle] = useState(()=>job?.title || "");
    const [jobType, setJobType] = useState(()=>job?.type || "");
    const [description, setDescription] = useState(()=>job?.description || "");
    const [location, setLocation] = useState(()=>job?.location || "");
    const [salary, setSalary] = useState(()=>job?.salary || "");
    const [companyName, setCompanyName] = useState(()=>job?.company.name || "");
    const [companyDescription, setCompanyDescription] = useState(()=>job?.company.description || "");
    const [companyEmail, setCompanyEmail] = useState(()=> job?.company.companyemail || "");
    const [phone, setPhone] = useState(()=>job?.company.contactPhone || "");
    
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
        editjobSubmit(jobData, id);
        toast.success("Edit Added Successfully"); 
        return navigate('/jobs')            
        };

  return (
    <Flex minH="100vh" align="center" justify="center" p={4}>
          <Box w={{ base: "95%", md: "60%", lg: "40%" }} p={6} bg="white" boxShadow="2xl" borderRadius="lg">
            <Heading mb={6} textAlign="center" fontSize="xl" color="gray.700">
              Edit Job
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
  )
}

export default EditjobPage