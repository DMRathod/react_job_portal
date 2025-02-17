import React from 'react'
import { Button, Card, Flex, Box } from "@chakra-ui/react"
import JobCard from './Card'

const CardDemo = () => {
  return (
    <>
     <Flex
      direction={{ base: 'column', md: 'row' }} // Stack on mobile, row on medium screens and up
      justify="center" // Center both cards on large screens
      align="center"
      gap={{ base: 4, md: 6 }} // Space between cards
      wrap="wrap" // Allows wrapping on smaller screens
      mb ={3}
    >
      <JobCard buttontext = "View Job" path = "jobs" job_tittle = "Explore Available Jobs" Description = "Discover thousands of job opportunities across various industries. You will find the right role to suit your skills and interests. Start your journey today and take the next step in your career with just a few clicks." />
      <JobCard buttontext = "Add Job" path = "add-job" job_tittle = "Post a New Job" Description = "Have an opening? Share job details and help others find the right candidates. Simply fill out the job title, description, and other details to get started. Hiring has never been easier! " />          
    </Flex>
   
  </>
  )
}

export default CardDemo