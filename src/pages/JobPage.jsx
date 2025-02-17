import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Spinner, VStack, HStack, Separator, Center} from "@chakra-ui/react"
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import {
    Box,
    Flex,
    Text,
    Button,
    Card,
    CardBody,
    Heading,
    Stack,
  } from "@chakra-ui/react";


const JobPage = ({deleteJob}) => {
    const [job, setJob] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const onDeleteClick = (jobId) => {
        const confirm = window.confirm("Are you sure ?")
        if (!confirm) return
        deleteJob(jobId)
        toast.success('Job Deleted Successfully');
        navigate('/jobs');
    }

    const apiUrl = `/api/jobs/${id}`;

    useEffect( () => {
        const fetchJob = async() => {
          try{
            const res = await fetch(apiUrl);
            const data = await res.json();
            setJob(data);        
          } catch(error){
            console.log('Error in fetching the data from JobPage', error);
          }finally{
            setLoading(false);
          }          
        }
        fetchJob();
      }, []);

  return (
        loading ? <>
        <Flex justifyContent="center">
        <Spinner/>
        </Flex>
        
        </>  :
    <>
   <Box p={8}>
  {/* Back Button */}
  <Button mb={4} onClick={() => navigate("/jobs")} colorScheme="blue">
    Back to Jobs
  </Button>

  {/* Main Layout */}
  <Flex
    direction={{ base: "column", md: "row" }}
    gap={8}
    alignItems={{ base: "start", md: "flex-start" }}
    justifyContent="center"
  >
    {/* Left Column - Job Description */}
    <Card.Root
      boxShadow="lg"
      borderRadius="md"
      flex="2"
      width={{ base: "100%", md: "60%" }}
      _hover={{ transform: 'scale(1.001)', transition: '0.1s ease-in-out' }}
    >
      <Card.Header>
        <Heading size="lg">Job Details</Heading>
        <Separator />
      </Card.Header>
      <Card.Body>
        <Stack spacing={4}>
          <Text>
            <b>Job Type:</b> {job.type}
          </Text>
          <Text>
            <b>Title:</b> {job.title}
          </Text>
          <Text>
            <b>Location:</b> 📍 {job.location} 
          </Text>
          <Text>
            <b>Description:</b> {job.description}
          </Text>
          <Text>
            <b>Salary:</b> 💰 {job.salary} 
          </Text>
        </Stack>
      </Card.Body>
    </Card.Root>

    {/* Right Column - Company Info */}
    <VStack
      flex="1"
      width={{ base: "100%", md: "35%" }}
      spacing={6}
      alignItems="stretch"
    >
      {/* Company Info Card */}
      <Card.Root boxShadow="md" borderRadius="md" height="100%" _hover={{ transform: 'scale(1.001)', transition: '0.1s ease-in-out' }}>
        <Card.Header>
            <Heading size="md">Company Info</Heading>
            <Separator />
            <Text fontWeight="bold" mt={0}>{job.company.name}</Text> {/* Removed extra margin */}
        </Card.Header>
        <Card.Body>
            <Stack spacing={0}>
                <Text>{job.company.description}</Text> {/* Company Description */}
                <Text>
                    <b>Email:</b>
                    <Box as="span" display="block">{job.company.companyemail}</Box>
                </Text>
                <Text>
                    <b>Phone:</b>
                    <Box as="span" display="block">{job.company.contactPhone}</Box>
                </Text>
            </Stack>
        </Card.Body>
    </Card.Root>

      {/* Edit/Delete Buttons Card */}
      <Card.Root boxShadow="md" borderRadius="md" _hover={{ transform: 'scale(1.01)', transition: '0.01s ease-in-out' }}>
        <Card.Body>
          <Flex justifyContent="center">
            <HStack spacing={2}>
              <Button
                colorScheme="yellow"
                onClick={() => navigate(`/edit-job/${id}`, { state: { job, id } })}
              >
                Edit Job
              </Button>
              <Button onClick={() => onDeleteClick(id)} colorScheme="red">Delete Job</Button>
            </HStack>
          </Flex>
        </Card.Body>
      </Card.Root>
    </VStack>
  </Flex>
</Box>

    </>
  )
}

export default JobPage