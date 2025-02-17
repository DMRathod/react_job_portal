import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage';
import MainLayout from './layouts/MainLayout';
import Jobspage from './pages/Jobspage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/Notfoundpage';
import EditjobPage from './pages/EditjobPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {  
const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob)
  });
  return;
}

const editJob = async (updateJob, id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateJob)
  });
  return;
}

const deleteJob = async(id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  });
  return;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element = {<Homepage/>} />
      <Route path = '/jobs' element = {<Jobspage/>} />
      <Route path = '/add-job' element = {<AddJobPage addjobSubmit = {addJob}/>} />
      <Route path = '/about' element = {<AboutUsPage/>} />
      <Route path = '/contact' element = {<ContactUsPage/>} />
      <Route path = '/edit-job/:id' element = {<EditjobPage editjobSubmit = {editJob}/>} />
      <Route path = '/jobs/:id' element = {<JobPage deleteJob = {deleteJob} />}  />
      <Route path = '*' element = {<NotFoundPage/>} />
    </Route>
  )
);
  return <RouterProvider router={router} />
}

export default App
