import React from 'react'
import JobsCard from './JobsCard'
import { Box, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Spinner } from "@chakra-ui/react"


const Joblist = (props) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    const fetchJobs = async() => {
      const apiUrl = props.isHome
      ? '/api/jobs'
      : '/api/jobs?_limit=3'
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);        
      } catch(error){
        console.log('Error in fetching the data', error);

      }finally{
        setLoading(false);
      }
      
    }
    fetchJobs();
  }, []);
  return (
    <Flex
      justify="center"
      align="center"
      minHeight="100vh" // Full viewport height
      bg="#FFFFFF"
      p={[6, 8, 12, 20]} // Responsive padding: [mobile, tablet, laptop, desktop]
    >
      <Box w="100%" maxW="1200px">
        {/* Heading Section */}
        <Text
          fontSize={["lg", "xl", "2xl"]} // Responsive font sizes
          fontWeight="bold"
          color="#333333"
          mb={6}
          mt = {4}
          textAlign="center"
        >
          {props.isHome ? "Browse All Jobs" : "Recent Jobs" }
        </Text>

        {/* Job Cards Section */}
        <HStack
          spacing={[4, 6]} // Responsive spacing between cards
          justify="center"
          wrap="wrap" // Ensure wrapping for small screens
        >
          {loading ? (
            <>
            <VStack>
              <Spinner size="xl"  color="colorPalette.600"  borderWidth="4px" />
              <Text color="colorPalette.600">Loading...</Text>
            </VStack>            
            </>            
          ) : (
            <>
            {jobs.map((job) => (          
            <JobsCard
              key={job.id}
              jobId = {job.id}
              type={job.type}
              location={job.location}
              salary={job.salary}
              buttontext="Apply Now"
              job_tittle={job.title}
              Description={job.description}
            />
            ))}
            </>
          )}
          
        </HStack>
      </Box>
    </Flex>
  )
}

export default Joblist